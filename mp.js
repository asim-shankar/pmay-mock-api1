// api/mp.js
// Mock MP Directory API (serverless on Vercel)

const MP_BY_CONSTITUENCY = {
  "New Delhi":        { state: "Delhi",            mp_name: "Anita Verma",     party: "NPP", phone: "011-4000-1001", email: "office.nd@npp.example", office_address: "Sansad Marg, New Delhi", last_election_year: 2024 },
  "Mumbai South":     { state: "Maharashtra",      mp_name: "Rohan Patil",     party: "PJP", phone: "022-4000-2002", email: "office.ms@pjp.example", office_address: "Nariman Point, Mumbai",  last_election_year: 2024 },
  "Bangalore Central":{ state: "Karnataka",        mp_name: "Keerthi Rao",     party: "SJD", phone: "080-4000-3003", email: "office.bc@sjd.example", office_address: "MG Road, Bengaluru",     last_election_year: 2024 },
  "Chennai Central":  { state: "Tamil Nadu",       mp_name: "S. Kannan",       party: "TNF", phone: "044-4000-4004", email: "office.cc@tnf.example", office_address: "Parrys Corner, Chennai", last_election_year: 2024 },
  "Kolkata North":    { state: "West Bengal",      mp_name: "Mita Chatterjee", party: "BWP", phone: "033-4000-5005", email: "office.kn@bwp.example", office_address: "BBD Bagh, Kolkata",      last_election_year: 2024 },
  "Hyderabad":        { state: "Telangana",        mp_name: "Arif Qureshi",    party: "URP", phone: "040-4000-6006", email: "office.hy@urp.example", office_address: "Abids, Hyderabad",       last_election_year: 2024 },
  "Lucknow":          { state: "Uttar Pradesh",    mp_name: "Nisha Srivastava",party: "JNP", phone: "0522-4000-7007",email: "office.lu@jnp.example", office_address: "Hazratganj, Lucknow",    last_election_year: 2024 },
  "Bhubaneswar":      { state: "Odisha",           mp_name: "Pratyush Mishra", party: "ODS", phone: "0674-4000-8008",email: "office.bb@ods.example", office_address: "Unit 5, Bhubaneswar",    last_election_year: 2024 },
  "Ahmedabad East":   { state: "Gujarat",          mp_name: "Mehul Shah",      party: "GJP", phone: "079-4000-9009", email: "office.ae@gjp.example", office_address: "Lal Darwaja, Ahmedabad", last_election_year: 2024 },
  "Jaipur":           { state: "Rajasthan",        mp_name: "Anuraag Meena",   party: "RJP", phone: "0141-4010-0101",email: "office.jp@rjp.example", office_address: "MI Road, Jaipur",        last_election_year: 2024 }
};

// Optional pincode-to-constituency helper for quick demos (mock)
const PIN_TO_CONS = {
  "110001": "New Delhi",
  "400001": "Mumbai South",
  "560001": "Bangalore Central",
  "600001": "Chennai Central",
  "700001": "Kolkata North",
  "500001": "Hyderabad",
  "226001": "Lucknow",
  "751001": "Bhubaneswar",
  "380001": "Ahmedabad East",
  "302001": "Jaipur"
};

const like = (t = "", q = "") => String(t).toLowerCase().includes(String(q).toLowerCase());

export default function handler(req, res) {
  const { pincode = "", constituency = "", state = "", mock = "true" } = req.query;

  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  // Resolve constituency from pincode if provided
  const fromPin = pincode && PIN_TO_CONS[pincode] ? PIN_TO_CONS[pincode] : null;

  // Exact by constituency or from pincode
  const key = (constituency || fromPin) || "";
  if (key && MP_BY_CONSTITUENCY[key]) {
    return res.status(200).json({
      meta: { mock: mock !== "false", lookup: fromPin ? "pincode" : "constituency" },
      record: { constituency: key, ...MP_BY_CONSTITUENCY[key] },
      disclaimer: "MOCK DATA - For demonstration only; verify with official Lok Sabha sources."
    });
  }

  // Fuzzy search by state/constituency
  let list = Object.entries(MP_BY_CONSTITUENCY).map(([c, v]) => ({ constituency: c, ...v }));
  if (state) list = list.filter(r => like(r.state, state));
  if (constituency) list = list.filter(r => like(r.constituency, constituency));

  return res.status(200).json({
    meta: { mock: mock !== "false", count: list.length },
    records: list,
    disclaimer: "MOCK DATA - For demonstration only; verify with official Lok Sabha sources."
  });
}

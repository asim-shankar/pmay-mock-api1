// api/pmay.js
// Vercel Serverless Function (Node.js runtime) - PMAY + 50+ mock schemes catalog

// Lightweight contains helper (case-insensitive)
const has = (text = "", q = "") =>
  String(text).toLowerCase().includes(String(q).toLowerCase());

// Minimal mock catalog: central + state schemes (names only, mock summaries)
const SCHEMES = [
  // Housing / Urban
  { code: "PMAY_U", name: "Pradhan Mantri Awas Yojana - Urban", type: "Central", category: "Housing", mock_summary: "Urban housing support for EWS/LIG/MIG; beneficiary-led and other verticals." },
  { code: "PMAY_G", name: "Pradhan Mantri Awas Yojana - Gramin", type: "Central", category: "Housing", mock_summary: "Rural pucca houses for eligible households." },
  { code: "AMRUT", name: "AMRUT Mission", type: "Central", category: "Urban", mock_summary: "Urban water supply, sewerage, and green spaces." },
  { code: "SMART_CITIES", name: "Smart Cities Mission", type: "Central", category: "Urban", mock_summary: "City-level smart infrastructure and services." },
  { code: "JAL_JEEVAN", name: "Jal Jeevan Mission", type: "Central", category: "Water", mock_summary: "Functional household tap connections for rural India." },

  // Health / Social
  { code: "AB_PMJAY", name: "Ayushman Bharat - PMJAY", type: "Central", category: "Health", mock_summary: "Health insurance coverage for eligible families." },
  { code: "POSHAN", name: "POSHAN Abhiyaan", type: "Central", category: "Nutrition", mock_summary: "Convergence to reduce malnutrition." },
  { code: "ICDS", name: "ICDS", type: "Central", category: "Child Welfare", mock_summary: "Supplementary nutrition and early childhood services." },
  { code: "PM_POSHAN", name: "PM POSHAN (Mid-Day Meal)", type: "Central", category: "Education", mock_summary: "School meal support for children." },
  { code: "MISSION_INDRADHANUSH", name: "Mission Indradhanush", type: "Central", category: "Health", mock_summary: "Universal immunization drive." },

  // Financial inclusion / Insurance / Pensions
  { code: "PMJDY", name: "Pradhan Mantri Jan Dhan Yojana", type: "Central", category: "Financial Inclusion", mock_summary: "Basic bank accounts and financial access." },
  { code: "PMSBY", name: "Pradhan Mantri Suraksha Bima Yojana", type: "Central", category: "Insurance", mock_summary: "Accident insurance for eligible subscribers." },
  { code: "PMJJBY", name: "Pradhan Mantri Jeevan Jyoti Bima Yojana", type: "Central", category: "Insurance", mock_summary: "Life insurance for eligible subscribers." },
  { code: "APY", name: "Atal Pension Yojana", type: "Central", category: "Pension", mock_summary: "Voluntary pension for unorganized sector." },
  { code: "NPS", name: "National Pension System", type: "Central", category: "Pension", mock_summary: "Market-linked retirement savings." },
  { code: "PM_SYM", name: "Pradhan Mantri Shram Yogi Maan-Dhan", type: "Central", category: "Pension", mock_summary: "Pension for unorganized workers." },
  { code: "PM_KMDY", name: "PM Kisan Maandhan Yojana", type: "Central", category: "Pension", mock_summary: "Pension for small and marginal farmers." },

  // Livelihood / Employment / Skill
  { code: "MGNREGA", name: "MGNREGA", type: "Central", category: "Employment", mock_summary: "Wage employment guarantee in rural areas." },
  { code: "DDU_GKY", name: "DDU-GKY", type: "Central", category: "Skill", mock_summary: "Placement-linked skill training for rural youth." },
  { code: "DAY_NULM", name: "DAY-NULM", type: "Central", category: "Urban Livelihoods", mock_summary: "Urban poverty alleviation and skills." },
  { code: "PMEGP", name: "PM Employment Generation Programme", type: "Central", category: "Enterprise", mock_summary: "Credit-linked subsidy for micro enterprises." },
  { code: "STARTUP_INDIA", name: "Startup India", type: "Central", category: "Enterprise", mock_summary: "Startup ecosystem support (regulatory/funding interfaces)." },
  { code: "STANDUP_INDIA", name: "Stand Up India", type: "Central", category: "Enterprise", mock_summary: "Loans for SC/ST and women entrepreneurs." },
  { code: "PM_MUDRA", name: "PM Mudra Yojana", type: "Central", category: "Credit", mock_summary: "Loans to micro and small enterprises." },
  { code: "SKILL_INDIA", name: "Skill India Mission", type: "Central", category: "Skill", mock_summary: "Skill development framework and programs." },

  // Agriculture / Fisheries / Energy
  { code: "PM_KISAN", name: "PM-KISAN", type: "Central", category: "Agriculture", mock_summary: "Income support for eligible farmer families." },
  { code: "PMFBY", name: "PM Fasal Bima Yojana", type: "Central", category: "Agriculture", mock_summary: "Crop insurance for farmers." },
  { code: "PMKSY", name: "PM Krishi Sinchai Yojana", type: "Central", category: "Irrigation", mock_summary: "More crop per drop—irrigation efficiency." },
  { code: "PMMSY", name: "PM Matsya Sampada Yojana", type: "Central", category: "Fisheries", mock_summary: "Fisheries sector development." },
  { code: "KUSUM", name: "KUSUM", type: "Central", category: "Renewable Energy", mock_summary: "Solar pumps and decentralized solar plants." },
  { code: "PM_SURYAGHAR", name: "PM Suryaghar Muft Bijli Yojana", type: "Central", category: "Renewable Energy", mock_summary: "Residential rooftop solar support (mock)." },
  { code: "SVAMITVA", name: "SVAMITVA", type: "Central", category: "Land", mock_summary: "Village property mapping and records." },

  // Women / Children / Education / Social
  { code: "BBBPP", name: "Beti Bachao Beti Padhao", type: "Central", category: "Women & Child", mock_summary: "Girl child education and empowerment." },
  { code: "SSY", name: "Sukanya Samriddhi Yojana", type: "Central", category: "Savings", mock_summary: "Small savings for girl child." },
  { code: "PM_UJJWALA", name: "Pradhan Mantri Ujjwala Yojana", type: "Central", category: "Energy/Social", mock_summary: "LPG connections for eligible households." },
  { code: "NSP", name: "National Scholarship Portal", type: "Central", category: "Scholarship", mock_summary: "Unified platform for scholarships." },
  { code: "E_SHRAM", name: "eShram", type: "Central", category: "Social Security", mock_summary: "Database and facilitation for unorganized workers." },
  { code: "PM_CARES_CHILDREN", name: "PM CARES for Children (assistive)", type: "Central", category: "Child Welfare", mock_summary: "Assistive support for eligible children (mock summary)." },

  // Industry / Investment / Digital
  { code: "MAKE_IN_INDIA", name: "Make in India", type: "Central", category: "Industry", mock_summary: "Manufacturing and investment facilitation." },
  { code: "PLI", name: "Production Linked Incentive (PLI)", type: "Central", category: "Industry", mock_summary: "Output-linked incentives across sectors." },
  { code: "DIGITAL_INDIA", name: "Digital India", type: "Central", category: "Digital", mock_summary: "Digital infrastructure and services." },
  { code: "GATI_SHAKTI", name: "PM Gati Shakti", type: "Central", category: "Logistics", mock_summary: "Integrated infra planning (mock summary)." },

  // Environment / Energy Conservation
  { code: "UJALA", name: "UJALA", type: "Central", category: "Energy Efficiency", mock_summary: "LED distribution and energy savings." },
  { code: "NMCG", name: "Namami Gange (NMCG)", type: "Central", category: "Environment", mock_summary: "Ganga rejuvenation program." },

  // Credit/Business support
  { code: "PM_SVANIDHI", name: "PM SVANidhi", type: "Central", category: "Credit", mock_summary: "Working capital loan support for street vendors." },

  // State exemplars (mock names retained to show variety)
  { code: "RYTHU_BANDHU_TG", name: "Rythu Bandhu (Telangana)", type: "State", category: "Agriculture", mock_summary: "State income support for farmers (mock)." },
  { code: "KANYASHREE_WB", name: "Kanyashree (West Bengal)", type: "State", category: "Women & Child", mock_summary: "Conditional cash support for girls' education (mock)." },
  { code: "SWASTHYA_SATHI_WB", name: "Swasthya Sathi (West Bengal)", type: "State", category: "Health", mock_summary: "State health cover (mock)." },
  { code: "MAHATMA_PHULE_HEALTH_MH", name: "Mahatma Phule Jan Arogya (Maharashtra)", type: "State", category: "Health", mock_summary: "State health assistance (mock)." },
  { code: "LEK_LADKI_MH", name: "Lek Ladki (Maharashtra)", type: "State", category: "Women & Child", mock_summary: "Girls' support (mock)." },
  { code: "ANNAPURNA_TN", name: "Amma Unavagam / Rice (Tamil Nadu)", type: "State", category: "Food", mock_summary: "Low-cost/community meals (mock)." },
  { code: "FREE_BUS_WOMEN_TN", name: "Women Free Bus (Tamil Nadu)", type: "State", category: "Transport", mock_summary: "Free bus travel for women (mock)." },
  { code: "KALIA_OD", name: "KALIA (Odisha)", type: "State", category: "Agriculture", mock_summary: "Farmer support (mock)." },
  { code: "KRISHAK_BONDHU_WB", name: "Krishak Bandhu (West Bengal)", type: "State", category: "Agriculture", mock_summary: "Farmer assistance (mock)." },
  { code: "AASARA_TG", name: "Aasara Pension (Telangana)", type: "State", category: "Pension", mock_summary: "Social pension (mock)." },
  { code: "ROJGAR_GARANTEE_MH", name: "Maharashtra Employment Guarantee", type: "State", category: "Employment", mock_summary: "State wage employment (mock)." },
  { code: "UPEP_UP", name: "UP Entrepreneur/Skill Initiatives", type: "State", category: "Enterprise", mock_summary: "State skill/enterprise support (mock)." }
];

// Default PMAY payload for backwards compatibility
const basePMAY = {
  scheme_name: "PMAY - Pradhan Mantri Awas Yojana",
  eligibility: {
    income_limit: "EWS up to ₹3 lakh; LIG ₹3–6 lakh annually",
    house_ownership: "No pucca house in family name anywhere in India",
    mandatory_requirement: "Female or joint ownership preferred"
  },
  benefits: {
    interest_subsidy: "Up to 6.5% for EWS/LIG (vertical dependent)",
    max_loan_amount: "Indicative up to ₹6 lakh for EWS/LIG",
    tenure: "Up to ~20 years (as per lender)"
  },
  application_process: {
    online_portal: "pmaymis.gov.in",
    required_documents: ["Aadhaar", "Income certificate", "Property/land documents", "Bank details"],
    status_check: "pmaymis.gov.in/track_application"
  },
  disclaimer: "Mock data for demo; verify on official portals."
};

export default function handler(req, res) {
  const {
    scheme_query = "general",
    name = "",
    category = "",
    type = "",
    limit = "20",
    offset = "0"
  } = req.query;

  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  // Filter
  let records = SCHEMES.filter(s =>
    (!name || has(s.name, name) || has(s.code, name)) &&
    (!category || has(s.category, category)) &&
    (!type || has(s.type, type))
  );

  // Pagination
  const L = Math.max(1, Math.min(100, parseInt(limit, 10) || 20));
  const O = Math.max(0, parseInt(offset, 10) || 0);
  const paged = records.slice(O, O + L);

  // Response
  return res.status(200).json({
    meta: {
      scheme_query,
      total: records.length,
      count: paged.length,
      limit: L,
      offset: O,
      mock: true
    },
    pmay: basePMAY,
    records: paged
  });
}

import React, { useState } from "react";
import "./Packages.css";
// Make sure logo.png is in your src folder


const SECTION_ORDER = [
  "Design",
  "Project Management",
  "Structure",
  "Bathroom & Plumbing",
  "Flooring",
  "Kitchen & Dining",
  "Door, Windows and Railing",
  "Painting",
  "Electrical",
  "What's Not Included",
];

// ... (Your packages data remains the same as previous corrected versions)
const packages = [
    {
      name: "BASIC PACKAGE",
      price: "₹1999 / sqft",
      data: {
        Design: [
          "<b>Scheme Drawing:</b> All Floors (2D)",
          "<b>Elevation Design:</b> (3D)",
          "<b>3D Floor Plan:</b> Included",
          "<b>Electrical Drawings:</b> All Floors (2D)",
          "<b>Plumbing Drawing:</b> All Floors (2D)",
          "<b>Working Drawing:</b> All Floors (2D)",
        ],
        "Project Management": [
          "<b>Site Engineer:</b> One Visit Per Day",
          "<b>Project Manager:</b> Visit site Once in a week",
          "<b>Android / iOS App:</b> Access to app for site status updates",
        ],
        Structure: [
          "<b>Basement Height:</b> Up to 2 feet",
          "<b>Steel:</b> Any ISI Brand",
          "<b>AAC:</b> For Partition walls. 8-Inch Thick Exterior Walls | 4-Inch Thick Inner Walls",
          "<b>Cement:</b> Penna / Priya",
          "<b>M Sand:</b> Blockwork & All Masonry Works",
          "<b>P Sand:</b> Plastering Works",
          "<b>Concrete Grade:</b> M20 (Manual Mix)",
          "<b>Ceiling Height:</b> 10 Feet",
          "<b>Steel Reinforcement:</b> As per Standard",
          "<b>Parapet Wall:</b> 3 Feet Height | 4\" Thick (Only for Floor with Headroom)",
        ],
        "Bathroom & Plumbing": [
          "<b>Wall Tiles:</b> Up to 7' Height. Size 2'X1' Vitrified Tile. Up to ₹40/Sqft",
          "<b>Bath & CP Fittings:</b> Cera | Up to ₹12,000 Per Bathroom | Floor Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set 2-in-1 Wall Mixer",
          "<b>Plumbing Pipes & Fittings:</b> Inner CPVC, Outer PVC. Brands: Any ISI Brand",
          "<b>Overhead Tank:</b> 1000 Litres Sintex | 3 Layered | UV Protected | White Color",
        ],
        Flooring: [
          "<b>Living, Dining, Bedrooms & Kitchen:</b> 2'X2' | Vitrified Tiles Up to ₹45/Sqft (Anuj / Sparrow)",
          "<b>Balcony & Utility:</b> Size 1'X1' | Up to ₹35/Sqft",
          "<b>Staircase:</b> Size 1'X1' Tile | Up to ₹35/Sqft",
          "<b>Car Parking:</b> 1'X1' Parking Tile | Up to ₹35/Sqft",
          "<b>Terrace Flooring:</b> Screed Concreting with Waterproofing",
        ],
        "Kitchen & Dining": [
          "<b>Wall Tile:</b> Vitrified Tile (2'X1') | Up to ₹45/Sqft",
          "<b>Sink Faucet:</b> Up to ₹900 / No",
          "<b>Kitchen Sink:</b> Stainless Steel single bowl Up to ₹2,800",
          "<b>Dining:</b> Wall Mounted Wash Basin",
          "<b>Kitchen Granite Top:</b> Up to ₹90/Sqft",
        ],
        "Door, Windows and Railing": [
          "<b>Main Door:</b> Malaysian Teak Door & Teak Frame | 32mm Thickness | 5\"X3\" Thick Frame | 7' Height 3.5 Feet Width",
          "<b>Room Doors:</b> White Panel Door | Sal Wood Frame | 7'X3'",
          "<b>Bathroom Door:</b> PVC Door | 7'X2.5'",
          "<b>Windows:</b> Aluminium Sliding window | Max 4' X 4' | One Window Per Room | 5mm Clear Glass",
          "<b>Staircase Railing:</b> MS Railing",
          "<b>Balcony Railing:</b> MS Railing",
        ],
        Painting: [
          "<b>Inner Wall Putty:</b> 2 coats of Wall Putty | Any ISI Brand",
          "<b>Wall Painting:</b> 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
          "<b>Ceiling Painting:</b> 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
          "<b>Exterior Paint:</b> 1 coat of Primer | 2 Coats of Ace | Any ISI Brand",
        ],
        Electrical: [
          "<b>Wires:</b> Essar",
          "<b>Switches:</b> Fybros",
          "<b>Bedroom:</b> 2 Switch Boxes (8-Module). One at Entrance and one at Bed-side",
          "<b>Bathroom:</b> 1 Switch Box (Inner) 4-Module, 1 Switch Box (Outer) 3-Module. Point for Heater & Exhaust",
          "<b>Living Room:</b> Up to 4 Switch Boxes (8 Module)",
          "<b>Dining:</b> 1 Switch (8-Module)",
          "<b>Pooja:</b> 1 Switch (3-Module)",
          "<b>Kitchen:</b> 3 Switch Boxes (6 Module). Point for HOB, Chimney, RO",
          "<b>Utility:</b> 1 Switch Box (4-Module)",
          "<b>AC Points:</b> 1 for Each Bedroom",
          "<b>Entrance:</b> 1 Switch Box (6-Module)",
          "<b>Balconies:</b> 1 Switch Box (3-Module)",
        ],
        "What's Not Included": [
          "<b>Compound Wall:</b> @ ₹425/Sqft & Gate",
          "<b>Sump & Septic Tank:</b> @ ₹24/Litre",
          "<b>Lift:</b> Lift Pit and Shaft",
          "<b>Electricity:</b> Connection Charges",
          "<b>Legal:</b> Building Plan Approval",
          "<b>Design:</b> Elevation Special Materials",
        ],
      },
    },
    {
      name: "STANDARD PACKAGE",
      price: "₹2299 / sqft",
      data: {
        Design: [
          "<b>Scheme Drawing:</b> All Floors (2D)",
          "<b>Elevation Design:</b> (3D)",
          "<b>Electrical Drawings:</b> All Floors (2D)",
          "<b>Plumbing Drawing:</b> All Floors (2D)",
          "<b>Working Drawing:</b> All Floors (2D)",
        ],
        "Project Management": [
          "<b>Site Engineer:</b> Dedicated full-time site engineer",
          "<b>Project Manager:</b> Visit site twice in a week",
          "<b>Architect:</b> Support till design completion",
        ],
        Structure: [
          "<b>Basement Height:</b> Up to 3 feet",
          "<b>Steel:</b> Arun TMT / GBR or Equivalent",
          "<b>Chamber Bricks:</b> For Partition walls. 9-Inch Thick Exterior Walls | 4-Inch Thick Inner Walls",
          "<b>Cement:</b> Ramco / Dalmia",
          "<b>M Sand:</b> Blockwork & All Masonry Works",
          "<b>P Sand:</b> Plastering Works",
          "<b>Concrete Grade:</b> M20 | RMC for Roof",
          "<b>Ceiling Height:</b> 10 Feet",
          "<b>Steel Reinforcement:</b> As per Standard",
          "<b>Parapet Wall:</b> 3 Feet Height | 6\" Thick (Only for Floor with Headroom)",
        ],
        "Bathroom & Plumbing": [
          "<b>Wall Tiles:</b> Up to Ceiling (Full Height). Size 2'X2' Vitrified Tile. Up to ₹50/Sqft. 1 Color for 2 Bathrooms",
          "<b>Bath & CP Fittings:</b> Parryware | Up to ₹17,000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer.",
          "<b>Plumbing Pipes & Fittings:</b> Inner CPVC, Outer PVC. Brands: Any ISI Brand",
          "<b>Overhead Tank:</b> 2000 Litres Sintex | 3 Layered | UV Protected | White Color",
        ],
        Flooring: [
          "<b>Living, Dining, Bedrooms & Kitchen:</b> 4'X2' | Vitrified Tiles Up to ₹65/Sqft. KAG / Sunheart or Equivalent",
          "<b>Balcony & Utility:</b> Size 2'X2' | Up to ₹50/Sqft | Anti-skid",
          "<b>Staircase:</b> Full Body Tile | Up to ₹110/sqft",
          "<b>Car Parking:</b> 1'X1' Heavy Duty Tile | Up to ₹250/Sqft",
          "<b>Terrace Flooring:</b> Screed Concreting with Waterproofing",
        ],
        "Kitchen & Dining": [
          "<b>Wall Tile:</b> Vitrified Tile (2'X2') | Up to ₹55/Sqft",
          "<b>Sink Faucet:</b> Up to ₹2,000 / No",
          "<b>Kitchen Sink:</b> Stainless Steel sink with Drain Up to ₹4,000",
          "<b>Dining:</b> Wall Mounted Wash Basin",
          "<b>Kitchen Granite Top:</b> Up to ₹140/Sqft",
        ],
        "Door, Windows and Railing": [
          "<b>Main Door:</b> Malaysian Teak Door & Teak Frame (Readymade) | 35mm Thickness | 5\"X3\" Thick Frame | 7' Height 3.5 Feet Width | Up to ₹22,000/nos",
          "<b>Room Doors:</b> Flush Door Sal Wood Frame | 7'X3'",
          "<b>Bathroom Door:</b> WPC Door & Frame | 7'X2.5'",
          "<b>Windows:</b> UPVC Sliding White | Max 5' X 5' | One Window Per Room | 5mm Clear Glass",
          "<b>Staircase Railing:</b> SS 304 Grade Railing",
          "<b>Balcony Railing:</b> SS 304 Grade Railing with 8mm Toughened Glass with Posts",
        ],
        Painting: [
          "<b>Inner Wall Putty:</b> 2 coats of Wall Putty | Nippon",
          "<b>Wall Painting:</b> 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
          "<b>Ceiling Painting:</b> 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
          "<b>Exterior Paint:</b> 1 coat of Primer | 2 Coats of Sumo Xtra | Nippon",
          "<b>Elevation Putty:</b> 2 Coats of Putty for Front Elevation | Nippon Exterior Putty",
        ],
        Electrical: [
          "<b>Wires:</b> Orbit (FRLS)",
          "<b>Switches:</b> Legrand",
          "<b>Bedroom:</b> 3 Switch Boxes (8-Module)",
          "<b>Bathroom:</b> 1 Switch Box (Inner) 4-Module, 1 Switch Box (Outer) 3-Module. Point for Heater & Exhaust",
          "<b>Living Room:</b> Up to 4 Switch Boxes (8 Module)",
          "<b>Dining:</b> 1 Switch (8-Module)",
          "<b>Pooja:</b> 1 Switch (3-Module)",
          "<b>Kitchen:</b> 3 Switch Boxes (6 Module). Point for HOB, Chimney, RO",
          "<b>Utility:</b> 1 Switch Box (4-Module)",
          "<b>AC Points:</b> 1 for Each Bedroom. 1 for Living Room",
          "<b>Entrance:</b> 1 Switch Box (6-Module)",
          "<b>Balconies:</b> 1 Switch Box (3-Module)",
        ],
        "What's Not Included": [
          "<b>Compound Wall:</b> @ ₹425/Sqft & Gate",
          "<b>Sump & Septic Tank:</b> @ ₹24/Litre",
          "<b>Lift:</b> Lift Pit and Shaft",
          "<b>Electricity:</b> Connection Charges",
          "<b>Legal:</b> Building Plan Approval",
          "<b>Design:</b> Elevation Special Materials",
        ],
      },
    },
    {
      name: "PREMIUM PACKAGE",
      price: "₹2549 / sqft",
      data: {
        Design: [
          "<b>Scheme Drawing:</b> All Floors (2D)",
          "<b>Elevation Design:</b> (3D)",
          "<b>3D Floor Plan:</b> Included",
          "<b>Electrical Drawings:</b> All Floors (2D)",
          "<b>Plumbing Drawing:</b> All Floors (2D)",
          "<b>Working Drawing:</b> All Floors (2D)",
          "<b>Soil Test:</b> Soil test report included",
          "<b>Structural:</b> Structural drawings included",
          "<b>Elevation Detail:</b> Drawing (2D)",
          "<b>Furniture Layout:</b> All Floors (2D)",
        ],
        "Project Management": [
          "<b>Site Engineer:</b> Dedicated Full-Time Site Engineer",
          "<b>Project Manager:</b> Daily Site Visit",
          "<b>Architect:</b> Dedicated Architect through out the project.",
        ],
        Structure: [
          "<b>Basement Height:</b> Up to 3.5 feet",
          "<b>Steel:</b> ARS or Equivalent",
          "<b>Wire-Cut Bricks:</b> For Partition walls. 9-Inch Thick Exterior Walls | 4-Inch Thick Inner Walls",
          "<b>Cement:</b> Ramco / Dalmia",
          "<b>M Sand:</b> Blockwork & All Masonry Works",
          "<b>River Sand:</b> Plastering Works",
          "<b>Concrete Grade:</b> M20 | RMC for Roof",
          "<b>Ceiling Height:</b> 10 Feet (FFL to FFL)",
          "<b>Steel Reinforcement:</b> As per Arvayon Structural Detailing",
          "<b>Parapet Wall:</b> 3.5 Feet Height | 6\" Thick",
          "<b>RCC Lift Pit:</b> Included (If Required)",
          "<b>Lift Pit & Shaft:</b> Included (If Required)",
        ],
        "Bathroom & Plumbing": [
          "<b>Wall Tiles:</b> Up to Ceiling (Full Height). 4'X2' Digital Vitrified Tile. Up to ₹285/Sqft",
          "<b>Bath & CP Fittings:</b> Jaquar | Up to ₹22,000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
          "<b>Plumbing Pipes & Fittings:</b> Inner CPVC, Outer PVC. Brands: Ashirwad / Finolex",
          "<b>Overhead Tank:</b> 3000 Litres Sintex | 5 Layered | UV Protected | White Color (With Sensor)",
          "<b>Solar Heater:</b> Plumbing Lines Included (If Required)",
        ],
        Flooring: [
          "<b>Living, Dining, Bedrooms & Kitchen:</b> 4'X2' | Tiles Up to ₹280/Sqft (Somany / Kajaria / KAG)",
          "<b>Balcony & Utility:</b> Size 2'X2' | Up to ₹60/Sqft",
          "<b>Staircase:</b> Granite Up to ₹160/sqft",
          "<b>Car Parking:</b> 2'X2' Heavy Stone Up to ₹280/Sqft",
          "<b>Terrace Flooring:</b> White Cooling Tile Size 1'X1' (Anuj) with Waterproofing",
        ],
        "Kitchen & Dining": [
          "<b>Wall Tile:</b> Vitrified Tile (4'X2') | Up to ₹65/Sqft",
          "<b>Sink Faucet:</b> Designer Brand | Up to ₹3,500/nos",
          "<b>Kitchen Sink:</b> Quartz Sink with Drain Up to ₹5,000",
          "<b>Dining:</b> Wash Basin with Granite Counter",
          "<b>Kitchen Granite Top:</b> Up to ₹160/Sqft",
        ],
        "Door, Windows and Railing": [
          "<b>Main Door:</b> Ghana Teak Door & Teak Frame | 35mm Thickness | 5\"X3\" Thick Frame | 8' Height 4 Feet Width",
          "<b>Room Doors:</b> Flush Door with Laminate | Ghana Wood Frame | 7'X3'",
          "<b>Bathroom Door:</b> WPC Door & Frame | 7'X2.5'",
          "<b>Windows:</b> UPVC Sliding White - No Restriction on Size and Quantity | 5mm Clear Glass",
          "<b>Staircase Railing:</b> SS 304 Grade Railing",
          "<b>Balcony Railing:</b> 10mm Full Toughened Glass with 304 Grade Railing",
        ],
        Painting: [
          "<b>Inner Wall Putty:</b> 2 coats of Wall Putty | Birla",
          "<b>Wall Painting:</b> 1 coat of Primer | 2 coats of Pro Matex Gold Emulsion | Nippon",
          "<b>Ceiling Painting:</b> 1 coat of Primer | 2 coats of Pro Matex Gold Emulsion | Nippon",
          "<b>Exterior Paint:</b> 1 coat of Primer | 2 Coats of Weather Bond PRO from Nippon",
          "<b>Elevation Putty:</b> 2 Coats of Putty for Two sides of Elevation | Birla Wallseal Waterproof",
        ],
        Electrical: [
          "<b>Wires:</b> Finolex / Havells (FRLS)",
          "<b>Switches:</b> GM",
          "<b>Bedroom:</b> 4 Switch Boxes (8-Module)",
          "<b>Bathroom:</b> 1 Switch Box (Inner) 4-Module, 1 Switch Box (Outer) 3-Module. Point for Heater & Exhaust",
          "<b>Living Room:</b> Up to 5 Switch Boxes (8 Module)",
          "<b>Dining:</b> 1 Switch (8-Module)",
          "<b>Pooja:</b> 2 Switch (3-Module)",
          "<b>Kitchen:</b> 5 Switch Boxes (6 Module). Point for HOB, Chimney, RO",
          "<b>Utility:</b> 2 Switch Boxes (4-Module)",
          "<b>AC Points:</b> 1 for Each Bedroom. 1 for Living Room",
          "<b>Entrance:</b> 1 Switch Box (6-Module)",
          "<b>Balconies:</b> 1 Switch Box (3-Module)",
          "<b>Panel Board:</b> Single Service with RCCB - Exterior Grade",
        ],
        "What's Not Included": [
          "<b>Compound Wall:</b> @ ₹425/Sqft & Gate",
          "<b>Sump & Septic Tank:</b> @ ₹24/Litre",
          "<b>Lift:</b> Installation cost",
          "<b>Electricity:</b> Connection charges",
          "<b>Legal:</b> Building Plan Approval",
          "<b>Design:</b> Elevation Special Materials",
        ],
      },
    },
    {
      name: "ULTRA LUXURY",
      price: "₹2999 / sqft",
      data: {
        Design: [
          "<b>Scheme Drawing:</b> All Floors (2D)",
          "<b>Elevation Design:</b> (3D)",
          "<b>3D Floor Plan:</b> Included",
          "<b>Electrical Drawings:</b> All Floors (2D)",
          "<b>Plumbing Drawing:</b> All Floors (2D)",
          "<b>Working Drawing:</b> All Floors (2D)",
          "<b>Soil Test:</b> Soil test report included",
          "<b>Structural:</b> Structural drawings included",
          "<b>Elevation Detail:</b> Drawing (2D)",
          "<b>Furniture Layout:</b> All Floors (2D)",
          "<b>Site Planning:</b> Site Assessment & Planning",
          "<b>Interior Views:</b> All Floors (3D)",
          "<b>3D Walkthrough:</b> Interior 3D Walk-Through",
          "<b>Approval:</b> Approval Drawing included",
          "<b>Landscaping:</b> Landscaping Architectural Designs",
        ],
        "Project Management": [
          "<b>Site Engineer:</b> Dedicated full-time site engineer",
          "<b>Project Manager:</b> Daily site visit",
          "<b>Architect:</b> Dedicated architect, frequent site visits.",
        ],
        Structure: [
          "<b>Basement Height:</b> Up to 5 feet",
          "<b>Steel:</b> TATA Steel",
          "<b>Wire-Cut Bricks:</b> For Partition walls. 9-Inch Thick Exterior Walls | 4-Inch Thick Inner Walls",
          "<b>Cement:</b> Ramco / Dalmia / Coramandel",
          "<b>River Sand:</b> Plastering Works, Blockwork & All Masonry Works",
          "<b>Concrete Grade:</b> M25 | RMC for Roof",
          "<b>Ceiling Height:</b> 11 Feet (FFL to FFL)",
          "<b>Reinforcement:</b> 1.5 times Strength as per Arvayon Structural Drawings",
          "<b>Parapet Wall:</b> 3.5 Feet Height | 6\" Thick or Toughened Glass Railing",
          "<b>RCC Lift Pit:</b> Included (If Required)",
          "<b>RCC Concrete Slab:</b> Slab for Base Included",
          "<b>Lift Shaft:</b> Included (If Required)",
        ],
        "Bathroom & Plumbing": [
          "<b>Wall Tiles:</b> Up to Ceiling (Full Height). 4'X2' Vitrified Tile. Up to ₹120/Sqft",
          "<b>Bath & CP Fittings:</b> Kohler | Up to ₹60,000 Per Bathroom | Concealed EWC, Counter Top Wash Basin, Marble Counter Slab, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
          "<b>Plumbing Pipes:</b> Inner CPVC, Outer PVC. HDPE flexible pipe. Brands: Ashirwad / Finolex / Jindal",
          "<b>RCC Overhead Tank:</b> Up to 6000 Litres with Waterproofing",
          "<b>Solar Heater:</b> Plumbing Lines Included (If Required)",
        ],
        Flooring: [
          "<b>Living, Dining, Bedrooms & Kitchen:</b> 6'X6' | Quartz Tiles Up to ₹200/Sqft",
          "<b>Balcony & Utility:</b> Size 2'X2' | Up to ₹60/Sqft",
          "<b>Staircase:</b> Marble Up to ₹350/sqft",
          "<b>Car Parking:</b> Granite | Up to ₹120/Sqft",
          "<b>Terrace Flooring:</b> 2'X2' Exterior Grade Vitrified Tile with Waterproofing",
        ],
        "Kitchen & Dining": [
          "<b>Wall Tile:</b> Vitrified Designer Tile (4'X2') | Up to ₹125/Sqft",
          "<b>Sink Faucet:</b> Floor Mounted Pull-Out | Up to ₹8,000 / No",
          "<b>Kitchen Sink:</b> Multi-function Sink Up to ₹15,000",
          "<b>Dining:</b> Premium Designer Collection Wash Basin with Marble Counter",
          "<b>Kitchen Top:</b> Quartz Stone Up to ₹350/Sqft",
        ],
        "Door, Windows and Railing": [
          "<b>Main Door:</b> Designer Wood Door (8'x5') or Security Steel Door with Digital Lock",
          "<b>Room Doors:</b> Flush Door with Laminate (8'x3.5') | Waterproof Flush Door with Designer Laminates",
          "<b>Windows:</b> Openable Type | UPVC Colored | No Restriction on Size | Toughened Glass",
          "<b>Staircase Railing:</b> Toughened Glass with SS or Wood Railing",
          "<b>Balcony Railing:</b> 10mm Full Toughened Glass with Aluminium Railing",
        ],
        Painting: [
          "<b>Inner Wall Putty:</b> 2 coats of Wall Putty | Birla",
          "<b>Wall Painting:</b> 1 coat of Primer | 2 coats of Royal Shyne | Asian",
          "<b>Ceiling Painting:</b> 1 coat of Primer | 2 coats of Royal Shyne | Nippon",
          "<b>Exterior Paint:</b> 1 coat of Primer | 2 Coats of Apex Ultima Protek | Asian",
          "<b>Elevation Putty:</b> 2 Coats of Putty for All sides of Elevation | Birla Wallseal Waterproofing",
        ],
        Electrical: [
          "<b>Wires:</b> Finolex / Havells (FRLS)",
          "<b>Switches:</b> Touch Switches with Glass Plates",
          "<b>Points:</b> Full custom required power points provided for Lifts, Pool, RO, Intercom, HVAC, etc.",
          "<b>Panel Board:</b> Up to 2 Service Connections with RCCB Exterior Grade",
        ],
        "What's Not Included": [
          "<b>Compound Wall:</b> @ ₹425/Sqft & Gate",
          "<b>Sump & Septic Tank:</b> @ ₹24/Litre",
          "<b>Lift:</b> Installation unit cost",
          "<b>Electricity:</b> Connection charges",
          "<b>Legal:</b> Building Plan Approval",
          "<b>Design:</b> Elevation Special Materials",
        ],
      },
    },
  ];

export default function Packages() {
  return (
    <div className="main-wrapper">
      <header className="brand-header">
     <img src="/probuildstudio2.png" alt="Pro Build Studio Logo" className="main-logo" />

      </header>

      <h1 className="services-title">Construction Services Packages</h1>
      
      <div className="container">
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}

function PackageCard({ pkg }) {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="card">
      <div className="header">
        <h4>{pkg.name}</h4>
        <h2>{pkg.price}</h2>
      </div>
      <div className="accordion-group">
        {SECTION_ORDER.map((section) => (
          <Accordion
            key={section}
            title={section}
            items={pkg.data[section] || []}
            isOpen={activeSection === section}
            onToggle={() => setActiveSection(activeSection === section ? null : section)}
          />
        ))}
      </div>
    </div>
  );
}

function Accordion({ title, items, isOpen, onToggle }) {
  return (
    <div className={`accordion ${isOpen ? "is-open" : ""}`}>
      <div className="accordion-header" onClick={onToggle}>
        <span>{title}</span>
        <span className={`icon ${isOpen ? "rotate" : ""}`}>+</span>
      </div>

      <div className="accordion-collapse">
        <ul className="accordion-body">
          {items.map((i, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: i }} />
          ))}
        </ul>
      </div>
    </div>
  );
}
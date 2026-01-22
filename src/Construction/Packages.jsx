import { useState } from "react";
import "./Packages.css";

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

const packages = [
  {
    name: "BASIC PACKAGE",
    price: "₹1999 / sqft",
    data: {
      Design: ["Scheme Drawing – All Floors (2D)",
       "Elevation design (3D)",
        "Half Layout: All floors (3D)",
        "Electrical drawings:  All Floors (2D)",
        "Plumbing Drawing: All Floors(2D)",
        "Working Drawing: All Floors (2D)",],
     
        "Project Management": [
       "Site Engineer : One Visit Per Day	",
        "Project Manager: Visit site Once in a week	",
        "Android / IOS App : Acess to app For site status update"
      ],
      Structure: [
      "Basement Height: Upto 2 feet",
      "Steel: Any ISI Brand",
      "AAC: For Partition walls. 8-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
      "Cement: Penna / Priya",
      "M Sand: Blockwork & All Masonry Works",
      "P Sand: Plastering Works",
      "Concrete Grade: M20 (Manual Mix)",
      "Ceiling Height: 10 Feet",
      "Steel Reinforcement: As per Standard",
      "Parapet Wall: 3 Feet Height | 4' Thick (Only for Floor with Headroom)"
      ],
      "Bathroom & Plumbing": [
       " Wall Tiles: Upto/Height. Size 2XI' Vitrified Tile. Upto 240/Sqft",
"Bath & CP Fittings: Cera | Upto 12000 Per Bathroom | Floor Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set 2-in-1 Wall Mixer",
"Plumbing Pipes & Fittings: Inner CPVC, Outer PVC Brands: Any ISI Brand",
"Overhead Tank: 1000 litres Sintex | 3 Layered | UV Protected | White Colour"
      ],
      Flooring: ["2x2 vitrified tiles – ₹45/sqft",
   "     Living, Dining, Bedrooms & Kitchen: 2'X2' | Vitrified Tiles Upto ₹45/Sqft. Anuj / Sparrow",
         "Balcony & Utility: Size 1'X1' | Upto 35/Sqft",
         "Staircase: Size 1'X1' Tile: Upto 35/sqft",
         "Car Parking: 1'XI' Parking Tile | Upto 235/Sqft",
        "Terrace Flooring: Screed Concreting with Waterproofing"
      ],
      "Kitchen & Dining": ["Granite top – ₹90/sqft",
        "Wall Tile: Vitrified Tile (2'X1') | Upto 245/Sqft",
"Sink Faucet: Upto ₹900 / No",
"Kitchen Sink: Stainless Steel single bowl Upto 2800",
"Dining: Wall Mounted Wash Basin",
"Kitchen Granite Top: Upto 90/Sqft"
      ],
      "Door, Windows and Railing": [
"Main Door: Malaysian Teak Door & Teak Frame | 32mm Thickness | 5'X3' Thick Frame | 7' Height 3.5 Feet Width",
"Room Doors: White Panel Door | Sal Wood Frame | 7'X3'",
"Bathroom Door: PVC Door | 7'X2.5'",
"Windows: Aluminium Sliding window | Max 4' X 4' | One Window Per Room | 5mm Clear Glass",
"Staircase Railing: MS Railing",
"Balcony Railing: MS Railing",

        "Main door – Malaysian teak",
        "Aluminium windows",
        "MS railing",
      ],
      Painting: [

"Inner Wall Putty: 2 coats of Wall Putty | Any ISI Brand",
"Wall Painting: 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
"Ceiling Painting: 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
"Exterior Paint: 1 coat of Primer | 2 Coats of Ace | Any ISI Brand",

        "Interior – Tractor emulsion",
        "Exterior – Ace paint",
      ],
      Electrical: [

       " Wires Essar",
"Switches - Fybros",
"Bedroom: 2 Switch Box (8-Module). One at Entrance and one at Bed-side",
"Bathroom: 1 Switch Box(Inner) 4-Module, 1 Switch Box(Outer) 3-Module. Point for Heater & Exhaust",
"Living Room: Upto 4 Switch Box (8 Module)",
"Dining: 1 Switch (8-Module)",
"Pooja: 1 Switch (3-Module)",
"Kitchen: 3 Switch Box (6 Module). Point for HOB, Chimney, RO",
"Utility: 1 Switch Box (4-Module)",
"AC Points: 1 for Each Bedroom.",
"Entrance: 1 Switch Box (6-Module)",
"Balconies: 1 Switch Box (3-Module)",
        "Essar wires",
        "Fybros switches",
      ],
      "What's Not Included": [

        "Compound Wall @ 425/Sqtft & Gate",
"Sump & Septic Tank @ 24/Litre",
"Lift, Lift Pit and Shaft",
"Electricity Connection",
"Building Plan Approval",
"Elevation Special Materials",
        "Compound wall",
        "Lift",
        "Plan approval",
      ],
    },
  },

  {
    name: "STANDARD PACKAGE",
    price: "₹2299 / sqft",
    data: {
      Design: [
        "Elevation design (3D)",
        "Half Layout: All floors (3D)",
        "Electrical drawings:  All Floors (2D)",
        "Plumbing Drawing: All Floors(2D)",
        "Working Drawing: All Floors (2D)",



        "2D Floor Plan",
        "3D Elevation",
        "Electrical & Plumbing Drawings",
      ],
      "Project Management": [

        "Site Engineer :   dedicated full-time site engineer",	
         "Project Manager: Visit site twice in a week",
         "Android / IOS App :  Daily Photo upload. project status monitoring"	,
         "Architect:  Support till design completion ",	
        "Dedicated site engineer",
        "PM – Twice a week",
        "Daily app updates",
      ],
      Structure: [
"Basement Height: Upto 3 feet",
"Steel: Arun  TMT/ GBR or Equivalent",
"Chamber Bricks: For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
"Cement: Ramco / Dalmia",
"M Sand: Blockwork & All Masonry Works",
"P Sand: Plastering Works",
"Concrete Grade: M20|  RMC for Roof",
"Ceiling Height: 10 Feet",
"Steel Reinforcement: As per Standard",
"Parapet Wall: 3 Feet Height | 6' Thick (Only for Floor with Headroom)"
       
      ],
      "Bathroom & Plumbing": [
        "Wall Tiles: Upto Ceiling (Full Height). Size 2'X2' Vitrified Tile. Upto ₹50/Sqft. 1 Colour for 2 Bathrooms",
        "Bath & CP Fittings: Parryware | Upto 17000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer.",
        "Plumbing Pipes & Fittings: Inner CPVC, Outer PVC. Brands: Any ISI Brand",
        "Overhead Tank: 2000 litres Sintex | 3 Layered | UV Protected | White Colour"
        
    
      ],
      Flooring: [
"Living, Dining, Bedrooms & Kitchen: 4'X2' | Vitrified Tiles Upto 65/Sqft. 1 Model for Living, Dining and Kitchen. KAG /",
"Sunheart or Equivalent",
"Balcony & Utility: Size 2'X2' | Upto 50/Sqft | Antiskid",
"Staircase: Full Body Tile: Upto 110/sqft",
"Car Parking: 1'XI' Heavy Duty Tile | Upto 250/Sqft",
"Terrace Flooring: Screed Concreting with Waterproofing"


       
      ],
      "Kitchen & Dining": [ 
"Wall Tile: Vitrified Tile (2'X2') | Upto 255/Sqft",
"Sink Faucet: Upto 2000 / No",
"Kitchen Sink: Stainless Steel sink with Drain Upto ₹4000",
"Dining: Wall Mounted Wash Basin",
"Kitchen Granite Top: Upto 140/Sqft"

        ],
      "Door, Windows and Railing": [

         
 	
"Main Door: Malaysian Teak Door & Teak Frame - Readymade | 35mm Thickness | 5'X3' Thick Frame | 7' Height 3.5 Feet Width | Upto 22000/nos | 1 Nos only.",
"Room Doors: Flush Door Sal Wood Frame | 7'X3'",
"Bathroom Door: WPC Door & Frame | 7'X2.5'",
"Windows: UPVC Sliding White | Max 5' X 5' | One Window Per Room | 5mm Clear Glass",
"Staircase Railing: SS 304 Grade Railing",
"Balcony Railing: SS 304 Grade Railing with 8mm Toughened Glass with Posts"
       
      ],
      Painting: [

"Inner Wall Putty: 2 coats of Wall Putty | Nippon",
"Wall Painting: 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
"Ceiling Painting: 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
"Exterior Paint: 1 coat of Primer | 2 Coats of Sumo Xtra | Nippon",
"Elevation Putty: 2 Coat of Putty for Front Elevation | Nippon Exterior Putty"

     
      ],
      Electrical: [
"Wires - Orbit (FRLS)",
"Switches - Legrand",
"Bedroom: 3 Switch Box (8-Module)",
"Bathroom: 1 Switch Box (Inner) 4-Module, 1 Switch Box (Outer) 3-Module. Point for Heater & Exhaust",
"Living Room: Upto 4 Switch Box (8 Module)",
"Dining: 1 Switch (8-Module)",
"Pooja: 1 Switch (3-Module)",
"Kitchen: 3 Switch Box (6 Module). Point for HOB, Chimney, RO",
"Utility: 1 Switch Box (4-Module)",
"AC Points: 1 for Each Bedroom. 1 for Living Room",
"Entrance: 1 Switch Box (6-Module)",
"Balconies: 1 Switch Box (3-Module)",
       
      ],
      "What's Not Included": [
     "Compound Wall @ 425/Sqtft & Gate",
"Sump & Septic Tank @ 24/Litre",
"Lift, Lift Pit and Shaft",
"Electricity Connection",
"Building Plan Approval",
"Elevation Special Materials"


      ],
    },
  },

  {
    name: "PREMIUM PACKAGE",
    price: "₹2549 / sqft",
    data: {
      
      Design: [
"SCHEME DRAWING: ALL FLOORS (2D)",
"ELEVATION DESIGN (3D)",
"HALF LAYOUT: ALL FLOORS (3D)",
"ELECTRICAL DRAWINGS:  All ROORS (2D)",
"PLUMBING DRAWING: ALL FLOORS(2D)",
"WORKING DRAWING: ALL FLOORS (2D)",
"SOIL TEST REPORT",
"STRUCTURAL DRAWINGS",
"ELEVATION DETAIL DRAWING: (2D)"  ,     
 "FURNITURE LAYOUT : ALL FLOORS (2D)"



      ],
      "Project Management": [
"Site Engineer :  DEDICATED FULL-TIME SITE ENGINEER",
"Project Manager: DAILY SITE VISIT"		,
"Android / IOS App :  DAILY PHOTO UPLOAD. PROJECT STATUS MONITORING",		
"Architect: DEDICATED ARCHITECT THROUGH- OUT THE PROJECT. STAGE WISE SITE VISIT. MATERIAL SELECTION SUPPORT"		



      ],
      Structure: [
        "Basement Height: Upto 3.5 feet",
"Steel: ARS or Equivalent",
"Wire-Cut Bricks: For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
"Cement: Ramco / Dalmia",
"M Sand: Blockwork & All Masonry Works",
"River Sand: Plastering Works",
"Concrete Grade: M20 | RMC for Roof",
"Ceiling Height: 10 Feet (FFL to FFL)",
"Steel Reinforcement: As per DEEJOS Structural Detailing.",
"Parapet Wall: 3.5' Feet Height | 6' Thick",
"RCC Lift Pit: Included (If Required)",
"Lift Pit & Shaft: Included (If Required",



      ],
      "Bathroom & Plumbing": [

"Wall Tiles: Upto Ceiling (Full Height). 4'X2' Digital Vitrified Tile. Upto 285/Sqft",
"Bath & CP Fittings: Jaquar | Upto 22000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
"Plumbing Pipes & Fittings: Inner CPVC, Outer PVC. Brands: Ashirwad / Finolex",
"Overhead Tank: 3000 litres Sintex | 5 Layered | UV Protected | White Colour. With Sensor.",
"Solar Heater Plumbing Lines: Included (If Required)"
      ],
      Flooring: [
"Living, Dining, Bedrooms & Kitchen: 4'X2' | Tiles Upto 280/Sqft. Somany / Kajaria / KAG/Sunheart",
"Balcony & Utility: Size 2'X2' | Upto 60/Sqft",
"Staircase: Granite Upto 160/sqft",
"Car Parking: 2'X2' Heavy Stone Upto 280/Sqft",
"Terrace Flooring: White Cooling Tile Size 1'X1' | Anuj | with Waterproofing"

      
      ],
      "Kitchen & Dining": [
        
        "Wall Tile: Vitrified Tile (4'X2') | Upto 65/Sqft",
"Sink Faucet: Designer Brand | Upto 3500/nos",
"Kitchen Sink: Quartz Sink with Drain Upto ₹5000",
"Dining: Wash Basin with Granite Counter",
"Kitchen Granite Top: Upto 160/Sqft",
        
],
      "Door, Windows and Railing": [
       " Main Door: Ghana Teak Door & Teak Frame | 35mm Thickness | 5'X3' Thick Frame | 8' Height 4 Feet Width.",
       "Room Doors: Flush Door with Laminate | Ghana Wood Frame | 7'X3'",
        "Bathroom Door: WPC Door & Frame | 7'X2.5'",
         "Windows: UPVC Sliding White - No Restriction on Size and Quantity | 5mm Clear Glass",
        "Staircase Railing: SS 304 Grade Railing",
        "Balcony Railing: 10mm Full Toughened Glass with 304 Grade Railing.",
      ],
      Painting: [
       " Inner Wall Putty: 2 coats of Wall Putty | Birla",
"Wall Painting: 1 coat of Primer | 2 coats of Pro Matex Gold Emulsion | Nippon",
"Ceiling Painting: 1 coat of Primer | 2 coats of Pro Matex Gold Emulsion | Nippon",
"Exterior Paint: 1 coat of Primer | 2 Coats of Weather bond PRO from Nippon",
"Elevation Putty: 2 Coat of Putty for Two sides of Elevation | Birla Wallseal Waterproof",
      ],
      Electrical: [
        "Wires - Finolex / Havells (FRLS)",
"Switches - GM",
"Bedroom: 4 Switch Box (8-Module)",
" Bathroom: 1 Switch Box (Inner) 4-Module, 1 Switch Box (Outer) 3-Module. Point for Heater & Exhaust",
"Living Room: Upto 5 Switch Box (8 Module)",
"Dining: 1 Switch (8-Module)",
 "Pooja: 2 Switch (3-Module)",
"Kitchen: 5 Switch Box (6 Module). Point for HOB, Chimney, RO",
"Utility: 2 Switch Box (4-Module)",
"AC Points: 1 for Each Bedroom. 1 for Living Room",
"Entrance: 1 Switch Box (6-Module)",
"Balconies: 1 Switch Box (3-Module)",
"Electricity Panel Board - Single Service with RLCB - Exterior Grade",
      ],
      "What's Not Included": [
     "  Compound Wall @ 425/Sqtft & Gate",
"Sump & Septic Tank @ 24/Litre",
"Lift",
"Electricity Connection",
"Building Plan Approval",
"Elevation Special Materials",
      ],
    },
  },

  {
    name: "ULTRA LUXURY",
    price: "₹2999 / sqft",
    data: {
      Design: [
       " SCHEME DRAWING: ALL FLOORS (2D)",
"ELEVATION DESIGN (3D)",
"HALF LAYOUT: ALL FLOORS (3D)",
"ELECTRICAL DRAWINGS:  All ROORS (2D)",
"PLUMBING DRAWING: ALL FLOORS(2D)",
"WORKING DRAWING: ALL FLOORS (2D)",
"SOIL TEST REPORT",
"STRUCTURAL DRAWINGS",
"ELEVATION DETAIL DRAWING: (2D)", 
"FURNITURE LAYOUT : ALL FLOORS (2D)",
"ELEVATION DETAIL DRAWING :(2D)",
"SITE ASSESSMENT & SITE PLAN",
"INTERIOR VIEWS: ALL FLOORS (3D)",
"INTERIOR 3D WALK- THROUGH",
"APPROVAL DRAWING",
"LANDSCAPING ARCHITECTURAL DESIGNS",

      ],
      "Project Management": [
       "Site Engineer :  DEDICATED FULL-TIME SITE ENGINEER",
       "Project Manager: DAILY SITE VISIT",
"Android / IOS App :  DAILY PHOTO UPLOAD. PROJECT STATUS MONITORING",
"Architect: DEDICATED ARCHITECT . FREQUENT SITE VISIT. MATERIAL & BRAND SELECTION SUPPORT INCLUDING INTERIORS AND HOME DECOR. ",





      ],
      Structure: [
       " Basement Height: Upto 5 feet",
"Steel: TATA Steel",
"Wire-Cut Bricks: For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
"Cement: Ramco / Dalmia / Coramandel",
"River Sand: Blockwork & All Masonry Works",
"River Sand: Plastering Works",
"Concrete Grade: M25 | RMC for Roof",
"Ceiling Height: 11 Feet (FFL to FFL)",
"Steel Reinforcement: 1.5times Strength all as per DEEJOS Structural Drawings and Detailing by deejos structural engineer.",
"Parapet Wall: 3.5' Feet Height | 6' Thick (Or) Toughened Glass Railing if Required.",
"RCC Lift Pit: Included (If Required)",
"RCC Concrete Slab for Base",
"Lift Pit & Shaft: Included (If Required)",
      ],
      "Bathroom & Plumbing": [
"Wall Tiles: Upto Ceiling (Full Height). 4'X2' Vitrified Tile. Upto 120/Sqft",
"Bath & CP Fittings: Kohler | Upto 60000 Per Bathroom | Concealed EWC, Counter Top Wash Basin, Marble Counter Slab, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
"Plumbing Pipes & Fittings: Inner CPVC, Outer PVC. HDPE flexible pipe. Brands: Ashirwad / Finolex / Jindal",
"RCC Overhead Tank: Upto 6000 litres with Waterproofing.",
"Solar Heater Plumbing Lines: Included (If Required)"
      ],
      Flooring: [
      "Living, Dining, Bedrooms & Kitchen: 6'X6' | Quarts Tiles Upto 200/Sqft",
"Balcony & Utility: Size 2'X2' | Upto 60/Sqft",
"Staircase: Marble Upto 350/sqft",
"Car Parking: Granite| Upto 120/Sqft",
"Terrace Flooring: 2'X2' Exterior Grade Vitrified Tile. (Any Grade) | with Waterproofing",
      ],
      "Kitchen & Dining": [
      " Wall Tile: Vitrified Designer Tile (4'X2') | Upto 125/Sqft",
"Sink Faucet: Floor Mounter Pull-Out | Upto ₹8000 / No",
"Kitchen Sink: Multifunction Sink Upto 15000",
"Dining: Premium Designer Collection Wash Basin with Marble Counter and Designer Tap.",
"Kitchen Top: Quarts Stone Upto 350/Sqft",
      ],
      "Door, Windows and Railing": [
      "Main Door: Designer Wood Door of Height upto 8Feet X 5Feet (or) Security Steel Door of Size (8'X4.5') Pure Stainless Steel with Digital Lock.",
"Room Doors: Flush Door with Laminate | Ghana Wood Frame | 8'X3.5'",
"Water Proof Flush Door with Designer Laminates | 8'X3'",
"Windows: Openable Type | UPVC Coloured | No Restriction on Size and Quantity | Toughened Glass",
" Staircase Railing: Toughened Glass with SS or Wood Railing or Aluminium",
" Balcony Railing: 10mm Full Toughened Glass with Aluminium Railing.,"
      ],
      Painting: [
    " Inner Wall Putty: 2 coats of Wall Putty | Birla",
"Wall Painting: 1 coat of Primer | 2 coats of Royal Shyne | Asian",
"Ceiling Painting: 1 coat of Primer | 2 coats of Royal Shyne | Nippon",
"Exterior Paint: 1 coat of Primer | 2 Coats of Apex Ultima Protek | Asian",
"Elevation Putty: 2 Coat of Putty for All sides of Elevation | Birla Wallseal Waterproofing",
      ],
      Electrical: [
     "Wires - Finolex / Havells (FRLS)",
"Switches - Touch Switches with Glass Plates.",
"No Restriction on Number of Points. Required power points will be provided for Lifts, DG, Curtain Motors, Swimming Pool, Ro Plant, Pressure Pump, Intercom, Surveillance System, Exterior Light Points, Gate Automation, lightening arrester, Hybrid Solar Heater, Water Fountain, HVAC Systems.",
"Electricity Panel Board - Upto 2 Service Connection with RLCB Exterior Grade"
      ],
      "What's Not Included": [
        "Compound Wall @ 425/Sqtft & Gate",
        "Sump & Septic Tank @ 24/Litre",
        "Lift",
        "Electricity Connection",
        "Building Plan Approval",
        "Elevation Special Materials"
      ],
    },
  },
];

export default function Packages() {
  return (
    <div className="main-wrapper">
      <h1 className="services-title">construction services package</h1>
     
      
      <div className="container">
        {packages.map((pkg) => (
          <div className="card" key={pkg.name}>
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
                />
              ))}
            </div>

            <button className="cta">GET DETAILED SPECIFICATION</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Accordion({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion ${open ? "is-open" : ""}`}>
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="icon">{open ? "−" : "+"}</span>
      </div>

      {open && (
        <ul className="accordion-body">
          {items.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

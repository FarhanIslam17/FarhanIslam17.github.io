/* Section graph: seven portfolio blocks wired in sequence. Content is grounded in the
   verified v8 resume (md5 0e86107ff79cc8e2f3506abef815904b) and confirmed facts only.
   GM is an INCOMING Jan 2027 role - never presented as completed work. */
export const stages=[
{n:'00',node:'',label:'SYSTEM',at:0,title:'Farhan Islam',sub:'ELECTRICAL ENGINEERING / EMBEDDED SYSTEMS / AVIONICS',copy:'An interactive map of an engineering journey: seven blocks on one connected board. The glowing wires are the route. Scroll to power the system up.'},
{n:'01',node:'INTERN',label:'INTERNSHIPS',at:.14,title:'Internships',sub:'GENERAL MOTORS · REACTION DYNAMICS',copy:'Two industry placements: incoming body-controls calibration and system test at General Motors, and avionics instrumentation at Reaction Dynamics.'},
{n:'02',node:'TEAMS',label:'DESIGN TEAMS',at:.28,title:'Design teams',sub:'SOLAR CAR · ROCKETRY · FRC 9659',copy:'Design teams are where the hardware gets built: low-voltage vehicle systems, launch avionics and a competition robot.'},
{n:'03',node:'PROJ',label:'PROJECTS',at:.42,title:'Projects',sub:'BUILDS · LAB STUDIES · MEASUREMENT',copy:'Selected engineering projects. Each block on the board is one project: hover or tap a block to inspect it.'},
{n:'04',node:'SKILLS',label:'SKILLS',at:.56,title:'Skills',sub:'GROUPED BY DISCIPLINE',copy:'Every skill here is backed by a block already on the map - an internship, a team or a build. Nothing decorative.'},
{n:'05',node:'ABOUT',label:'ABOUT',at:.70,title:'About',sub:'THE ENGINEER',copy:'Electrical Engineering co-op student at McMaster University, B.Eng expected April 2028. Drawn to avionics, instrumentation and embedded hardware - systems where measurement quality decides the outcome.'},
{n:'06',node:'RESUME',label:'RESUME',at:.84,title:'Resume',sub:'THE FORMAL DOCUMENT',copy:''},
{n:'07',node:'CONTACT',label:'CONTACT',at:.96,title:'Contact',sub:'GET IN TOUCH',copy:'Interested in embedded hardware, instrumentation and test. The board connects the work; the person behind it is reachable below.'},
];
export const internships=[
{org:'GENERAL MOTORS',role:'Body Controls Calibration and System Test Developer',meta:'INCOMING · JAN 2027 - DEC 2027 · OSHAWA, ON',line:'Incoming twelve-month placement in body controls calibration and system test, starting January 2027.'},
{org:'REACTION DYNAMICS',role:'Avionics Intern',meta:'MAY 2026 - AUG 2026 · LONGUEUIL, QC',line:'Commissioned a 20-channel LabJack T7 / Mux80 DAQ (ten pressure, ten thermocouple channels), designed and bench-validated a 4-layer instrumentation PCB in KiCad, and correlated independent shunt-tap references against LabJack readings across the operating range.'},
];
export const teams=[
{org:'MCMASTER SOLAR CAR',role:'Low Voltage Electrical Designer',meta:'SEP 2026 - PRESENT · HAMILTON, ON',line:'Designing the Motor section schematic of the Electrical System Emulator Board in Altium Designer: an STM32H563 interfacing dual Mitsuba controllers over DB37, sampling throttle and regen through a 3.3 V ADC and answering 125 kbps CAN polls.'},
{org:'MCMASTER ROCKETRY',role:'Launch Oversight and Logistics',meta:'SEP 2024 - JAN 2025 · HAMILTON, ON',line:'Built C++ tooling that parses LoRa telemetry logs into flight-data visualizations, and verified avionics continuity and sensor interfaces before a launch to 3,187 m apogee.'},
{org:'TEAM 9659 · FIRST ROBOTICS',role:'Electrical Team Lead',meta:'SEP 2023 - APR 2024 · NORTH YORK, ON',line:'Led a 5-person electrical team on the competition robot: power-distribution architecture, breaker and wire-gauge sizing, and modular harnesses built for full electrical swap-outs between matches.'},
];
export const skillGroups=[
{name:'HARDWARE / ELECTRONICS',items:['PCB design · Altium Designer, KiCad','Analog electronics / front ends','Power distribution & wire harnesses','Sensor interfaces & acquisition']},
{name:'EMBEDDED / FIRMWARE',items:['Embedded C / C++','STM32 · MSP432 · ESP32','CAN · I2C · SPI · UART','Real-time systems']},
{name:'SOFTWARE / PROGRAMMING',items:['Python · NumPy · Open3D','MATLAB','Java','Git']},
{name:'ENGINEERING TOOLS',items:['LabJack T7 / Mux80 DAQ','LTSpice modeling','AutoCAD','Test procedure development']},
{name:'CONTROLS / OTHER',items:['PID control','Relay logic & safety interlocks','Hardware validation & test','Soldering / crimping / bring-up']},
];
/* One block per project on the board. Blocks light up on hover or tap; blocks with a url
   open their public case-study page. Sink/Amp urls stay empty until their Notion pages exist. */
export const projects=[
{key:'MICRO',short:'MICROWAVE',accent:[1,.68,.27],type:'TEAM COURSE PROJECT · 1P13 · FEB–APR 2025',heading:'Accessible microwave control system',body:'Team-built accessible microwave interface using ultrasonic sensing, an ESP32 and spoken feedback. Farhan contributed CAD/enclosure design and documentation.',flow:['SENSE','INTERPRET','SPEAK'],url:'https://fancy-brook-b6f.notion.site/Accessible-Microwave-Control-System-1c644bb53cc980c58734ddcbbe8314d4'},
{key:'LIDAR',short:'LIDAR',accent:[.3,.85,.78],type:'PERSONAL BUILD',heading:'Indoor 3D spatial mapping',body:'A rotating time-of-flight sensor and stepper motor, read by an MSP432E401Y, turn room measurements into a spatial representation processed in Python.',flow:['SCAN','CAPTURE','MAP'],url:'https://fancy-brook-b6f.notion.site/MSP432-LiDAR-Room-Scanner-37344bb53cc9805f8890dedb5e257b23'},
{key:'SINK',short:'CURRENT SINK',accent:[.66,.56,1],type:'COURSE LAB · 3EJ4 · LAB 1',heading:'Transistor characterization and current sink',body:'Bench characterization of 2N3904 and 2N3906 transistors with an Analog Discovery 2, followed by a simulated emitter feedback current sink design.',flow:['MEASURE','MODEL','DESIGN'],url:'https://fancy-brook-b6f.notion.site/Transistor-Characterization-and-a-Constant-Current-Sink-40b44bb53cc981f498f1cfb82da550cc'},
{key:'AMP',short:'CE AMPLIFIER',accent:[1,.47,.6],type:'COURSE LAB · 3EJ4 · LAB 2',heading:'Single stage amplifier characterization',body:'Common emitter amplifier compared across simulation and bench measurements, with gain and loading sensitivity examined.',flow:['SIMULATE','MEASURE','COMPARE'],url:'https://fancy-brook-b6f.notion.site/Single-Stage-Amplifiers-Simulation-vs-Bench-40b44bb53cc98185b0e0f0c9b5042a39'},
{key:'XOR',short:'CMOS XOR',accent:[.4,.68,1],type:'COURSE PROJECT · 2EI4 · PROJECT 4',heading:'CMOS XOR gate on a breadboard',body:'Two input XOR gate built from 12 MOSFETs on two MC14007B chips, with the truth table and loaded rise and fall time tested on an Analog Discovery 2.',flow:['BUILD','TEST','MEASURE'],url:'https://app.notion.com/p/CMOS-XOR-Gate-Built-from-Two-MC14007B-Chips-40b44bb53cc9814ebbf8ce7cfa5f9da4'},
];

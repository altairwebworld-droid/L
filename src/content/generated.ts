import type { PageDepth, NewService, NewIndustry, NewGuide } from './depth';

// Data only. Reviewed content drafts merged by a script; see depth.ts for the shapes.
export const generatedDepth: Record<string, PageDepth> = {
  "/industries/plumbing": {
    "sections": [
      {
        "heading": "Answering service for plumbers: what happens when the phone rings and you are under a sink",
        "paragraphs": [
          "An answering service for plumbers has one job: get the call answered while your hands are in a wall. LYCORE runs an AI receptionist that picks up in your business name, asks what is wrong and where, and gets the urgent calls to you. This page walks through what a plumbing call looks like, what stays with you, and how to tell whether it is working.",
          "Your phone does not ring with one kind of call. A burst pipe or a sewage backup is a drop-everything call. A water heater gone cold, a running toilet or a request to price a bathroom repipe can wait until the afternoon. Then there are the calls that eat your time: a supplier, someone selling leads, a wrong number, a customer asking where the truck is.",
          "Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered, and that fewer than 3% of callers sent to voicemail leave a message. ServiceTitan's 2022 call data found that smaller shops booked about 26% of calls at peak times and about 9% after 6 p.m. Someone with water on the kitchen floor is unlikely to leave a message and wait for you.",
          "The cost of a lost call is yours to work out in your own units. Think about what one water heater install or one emergency call-out is worth, then count how many calls reach voicemail in a week. Most owners have never counted, and a few weeks of phone records will tell you."
        ]
      },
      {
        "heading": "What a call looks like with a plumbing virtual receptionist",
        "paragraphs": [
          "The plumbing virtual receptionist answers with your business name and says it is an AI assistant taking the call for you. It lets the caller explain, then asks the questions you have approved. If the caller asks for a person, it says so and hands over instead of guessing.",
          "On every call it captures the caller's name, number, address and the reason for calling. For plumbing, you usually add a few more questions, and you decide which ones.",
          "When the call ends, you or your dispatcher receive a summary: who called, where, what is wrong, how urgent it looked under your rules, and what the caller was told would happen next. Where your calendar or booking tool can be connected, the receptionist can offer times and record the booking. Where it cannot, it captures a booking or callback request for your team to confirm."
        ],
        "list": [
          "Is water still running, or has it stopped",
          "Which fixture or line is involved: toilet, water heater, main, drain, outdoor spigot",
          "Whether the caller owns the home, rents, or manages the property",
          "Whether anyone can give access if the caller is not there",
          "Residential or commercial",
          "Best number and time for a callback"
        ]
      },
      {
        "heading": "Urgent leaks, after hours and cold snaps",
        "paragraphs": [
          "You write the rules that separate urgent from routine. Urgent might mean an active leak, no water at all, a sewage backup, or a water heater dead in January. Routine might mean a dripping faucet, a slow drain or a fixture replacement quote. The receptionist sorts against your list, not its own opinion.",
          "For urgent calls, live transfer to your on-call phone is included where your phone setup supports it. You approve the transfer rules and what happens if nobody picks up, for example trying a second number and then taking a full message marked urgent and notifying you. Those steps are tested with real call scenarios before launch.",
          "After hours the receptionist answers with the same greeting and questions at 2 a.m. as at 2 p.m. Routine calls go into the morning queue with everything your office needs to call back. When a freeze puts the phone into overdrive, the calls you cannot reach are still answered, captured and ranked, so you see the whole list when you come up for air."
        ]
      },
      {
        "heading": "What stays with you, and how it fits your software",
        "paragraphs": [
          "Price, diagnosis and safety judgments stay with you. The receptionist does not quote a job, guess at what is wrong behind the wall, or tell a caller whether it is safe to wait. When a caller presses for a price, it says your office will confirm and captures the details you need to do that.",
          "Many plumbing shops run jobs in Housecall Pro, Jobber or ServiceTitan. LYCORE does not claim a built-in connection to any of them. What can be connected depends on your setup, and it is checked before a build is agreed. If a connection is not possible, the summary reaches your team by the route you choose and they enter the job themselves.",
          "The receptionist speaks in your name, so the greeting, the wording for urgent callers and the things it will never say are written with you and approved by you. Routing, coverage and fallback are tested with real call scenarios before launch."
        ]
      },
      {
        "heading": "How to judge whether it is working",
        "paragraphs": [
          "Agree a few measures before launch and look at them after the first few weeks. These are measures to agree, not results anyone can promise, and outcomes are never guaranteed.",
          "Where recording is switched on, you can listen to real calls and compare them with the summaries. Call recording and consent requirements are reviewed during setup. If the receptionist asks a question you do not want, or misses one you do, the rules are changed. You can try the receptionist yourself with the Test our AI agent button on this site, then book a call on the booking page for a free review."
        ],
        "list": [
          "Call answered rate, including nights and weekends",
          "Share of calls with complete details: name, number, address, reason",
          "Time from the end of an urgent call to your notification",
          "Urgent calls flagged correctly, checked on a sample of calls",
          "Calls handed to a person when the caller asked for one"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Will callers know they are talking to an AI?",
        "answer": "Yes. The receptionist says at the start of the call that it is an AI assistant answering for your business. Callers can ask for a person at any point, and it hands over instead of trying to talk them round."
      },
      {
        "question": "What happens on a burst-pipe call if my on-call plumber does not pick up?",
        "answer": "You decide that in advance. A typical rule is to try a second number, then take a full message with the address marked urgent and notify you. Live transfer is included where your phone setup supports it, and the fallback is tested with real call scenarios before launch."
      },
      {
        "question": "Do my customers have to change the number they call?",
        "answer": "The aim is that customers keep calling the number they already know. How calls reach the receptionist depends on your phone setup, and that is confirmed and tested before launch."
      },
      {
        "question": "Can it put a job straight into my schedule?",
        "answer": "Where your calendar or booking tool can be connected, it can offer times and record the booking. If not, it captures a booking or callback request and your team confirms the time. What can be connected is checked before the build is agreed."
      },
      {
        "question": "Can it turn away sales calls and wrong numbers?",
        "answer": "It can recognize them and handle them the way you set: take a short message, decline politely, or pass them on. You decide which callers reach you. Everything it does is summarized so you can see what it filtered."
      },
      {
        "question": "Is there a contract, and what does it cost?",
        "answer": "No long-term contract is required. Cost depends on your call volume and what you want the receptionist to do, so pricing is quoted on a call after a free review, with no pressure and no obligation."
      }
    ]
  },
  "/industries/hvac": {
    "sections": [
      {
        "heading": "Answering service for HVAC companies: a quiet phone, then everyone at once",
        "paragraphs": [
          "An answering service for HVAC companies has to cope with a phone that is quiet for weeks and then does not stop. LYCORE's AI receptionist answers in your company name, captures the address and what the system is doing, and sorts the call by your rules. Your technicians stay on the roof or in the attic, and dispatch gets a clear summary.",
          "The first hot afternoon or the first freeze brings no-cooling and no-heat calls all at once. Some are urgent: an elderly customer with no heat, a business losing product, a home with a baby. Others are tune-ups, quotes for a new system, warranty questions, or a distributor calling back about a part.",
          "ServiceTitan's 2022 call data found that smaller shops booked about 26% of calls at peak times and about 9% after 6 p.m. Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered and that fewer than 3% of callers sent to voicemail leave a message. In a heat wave, a caller who reaches voicemail keeps dialing."
        ]
      },
      {
        "heading": "What an HVAC call looks like from greeting to summary",
        "paragraphs": [
          "The receptionist answers in your company name and says it is an AI assistant. It captures the caller's name, number, service address and reason for calling on every call, then asks the trade questions you approve. A caller who wants a person gets one, or a handover, rather than a guess.",
          "The questions are yours to set. Most HVAC companies want to know the equipment and the symptom so dispatch can decide who to send and what to bring. You also decide how the receptionist treats existing customers, such as maintenance plan members, versus new callers.",
          "Afterward you receive a summary with the details, the urgency under your rules, and what the caller was told. Where your calendar or booking tool can be connected, the receptionist can offer times and record the booking. Otherwise it captures a service or estimate request for your team to confirm.",
          "Most HVAC shops also want to know the difference between a caller who needs a visit and one who needs an answer. The receptionist can tell a customer you will call back about a quote or a warranty question, and it captures the details so you are not asking the same questions twice."
        ],
        "list": [
          "Furnace, air conditioner, heat pump, mini split or rooftop unit",
          "What it is doing: no heat, no cooling, noise, ice, leak, blank thermostat",
          "How long it has been happening",
          "Residential or commercial, and whether anyone at the property is vulnerable if you want that asked",
          "Whether the caller is a current customer or on a maintenance agreement",
          "Best callback number and window"
        ]
      },
      {
        "heading": "After hours, no-heat calls and the first hot week",
        "paragraphs": [
          "You decide what counts as urgent after hours and what can wait for morning. A dead furnace on a freezing night may jump the line while a loud fan waits. The receptionist follows your written rules and asks the extra questions that let it apply them.",
          "For urgent calls, live transfer to the on-call technician or dispatcher is included where your phone setup supports it. You approve the transfer rules and what happens if nobody answers: a second number, then a full message marked urgent and a notification to you. Those paths are tested with real call scenarios before launch.",
          "Before the season starts, go through the rules again: who is on call, when the rotation changes, what to do when the on-call line is busy. Rules can be changed between seasons. For calls that still go unanswered, a missed call text back can send an approved text to the caller, with STOP handling, and replies route to you or your team."
        ]
      },
      {
        "heading": "What stays with your technicians and office",
        "paragraphs": [
          "Diagnosis, price and repair-or-replace advice stay with you. The receptionist does not tell a caller what is wrong with the unit or what a system will cost. Safety judgments stay with people too: it does not say a gas smell or a carbon monoxide alarm is fine, and you can approve wording that tells those callers to contact emergency services first.",
          "When a caller asks about a warranty claim, a complaint or a dispute over a previous visit, it captures the details and passes it to your office. It hands over rather than improvising."
        ]
      },
      {
        "heading": "How it fits the software your shop already uses",
        "paragraphs": [
          "HVAC companies commonly run dispatch and invoicing in ServiceTitan, Housecall Pro or Jobber. LYCORE does not claim a native integration with any of them. Connection options depend on your tools and are checked before a build is agreed.",
          "If a live connection is not available, summaries reach dispatch by the route you choose and your team enters the job. That is slower than a direct connection but it works, and it keeps the receptionist from writing to a system it should not touch.",
          "The receptionist speaks in your company name, so the greeting and the words it uses for urgent callers are written with you and approved by you before launch. Nothing goes live until routing and fallback have been tested with real call scenarios."
        ]
      },
      {
        "heading": "How to judge whether it is working",
        "paragraphs": [
          "Agree the measures before launch, then review them after a few weeks. They are for you to hold LYCORE to, not promised results, and outcomes are never guaranteed.",
          "Call recording and consent requirements are reviewed during setup, so you can check real calls against the summaries where recording is on. Try the receptionist with the Test our AI agent widget, then book a free review on the booking page."
        ],
        "list": [
          "Call answered rate at peak times and after hours",
          "Share of calls with equipment, symptom and address captured",
          "Time from an urgent call to your notification",
          "Urgent calls reaching the on-call person under your rules",
          "How many calls needed a person to step in, and why"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Will a no-heat call jump ahead of a routine call?",
        "answer": "It follows the priority rules you write. If you say no heat on a freezing night is urgent, the receptionist flags it and applies your transfer or notification rules. A routine tune-up request goes into the morning queue."
      },
      {
        "question": "Can it tell my maintenance plan customers from new callers?",
        "answer": "It can ask whether the caller is a current customer and record the answer. Matching the caller against your customer list depends on whether that data can be connected, which is checked before the build is agreed."
      },
      {
        "question": "Will it quote a price for a system replacement?",
        "answer": "No. Pricing and repair-or-replace advice stay with you or your estimator. The receptionist captures the details and books or requests an estimate visit."
      },
      {
        "question": "What if the on-call technician is already on another emergency at 3 a.m.?",
        "answer": "You set the fallback ahead of time: another number, a second technician, or a full message marked urgent with a notification to you. The caller is told what will happen next instead of hearing a ring tone."
      },
      {
        "question": "Do we have to change our phone system?",
        "answer": "Not necessarily. How calls reach the receptionist depends on your current phone setup, and routing, coverage and fallback are tested with real call scenarios before launch."
      },
      {
        "question": "Is there a contract, and what does it cost?",
        "answer": "No long-term contract is required. The cost depends on your call volume and what you want it to do. Pricing is quoted on a call after a free review, with no pressure and no obligation."
      }
    ]
  },
  "/industries/home-services": {
    "sections": [
      {
        "heading": "Answering service for contractors: the calls you miss while you are on the job",
        "paragraphs": [
          "An answering service for contractors only helps if it sounds like your office and asks what you would ask. LYCORE's home services answering service is an AI receptionist that answers in your company name, tells the caller it is an AI assistant, and captures the job, the address and the best time to call back. It works for general contractors, remodelers, handymen and multi-trade home-service businesses.",
          "The one number you give out carries every kind of call. A homeowner wants a bid on a kitchen, a past customer asks when the crew is coming back, and a subcontractor cannot find the gate. Sales calls and wrong numbers look exactly like leads until you pick up.",
          "Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered, and that fewer than 3% of callers sent to voicemail leave a message. A homeowner comparing bids is calling several contractors and is likely to talk to whoever answers first. You cannot run a saw and a phone at once."
        ]
      },
      {
        "heading": "What a call looks like with a home services answering service",
        "paragraphs": [
          "The receptionist answers with your company name and says it is an AI assistant. It captures name, number, address and the reason for the call, then asks the intake questions you approve for the kind of work. If the caller wants a person, it says so and hands over.",
          "It sorts each call into a type: new job inquiry, existing customer, subcontractor or supplier, sales call, wrong number. New inquiries are booked or logged as a callback request. Existing customers with a question about a live job go to whoever you name. Sales calls and wrong numbers are handled the way you set.",
          "You receive a summary of every call, including the ones it filtered, so nothing disappears silently. Where your calendar or booking tool can be connected, it can offer estimate times and record the booking. Otherwise it captures a request for your team to confirm.",
          "The intake questions are yours. A remodeler and a handyman need different ones, so the receptionist asks what fits your work and stops short of anything you have not approved. You can read the exact wording before it goes live."
        ],
        "list": [
          "Repair, remodel, addition, new build or maintenance",
          "Which trade or trades the job involves",
          "Whether the caller owns the property",
          "Rough timeline and how flexible it is",
          "Whether they are a new inquiry or an existing customer",
          "Best time to call back"
        ]
      },
      {
        "heading": "After hours, storm season and the days you are off",
        "paragraphs": [
          "Contractors get calls at 7 p.m. from homeowners who finally have time to think about the project. They also get calls on Saturday from customers who have a problem right now. The receptionist answers at any hour, so the 7 p.m. inquiry is captured with full details instead of a voicemail that may never be left.",
          "Peak season and storm weeks put a lot of calls on the phone at once. The receptionist answers each one, captures the details and ranks them by your rules, so you work down a sorted list rather than a pile of missed calls. A missed call text back can also reach callers whose calls go unanswered, with an approved message and STOP handling."
        ]
      },
      {
        "heading": "Urgent calls and what stays with you",
        "paragraphs": [
          "Contractors have emergencies too: a leak inside a wall you just opened, a tree through a roof, a site safety problem. You define which of those count as urgent. For urgent calls, live transfer is included where your phone setup supports it, and you approve what happens if nobody answers.",
          "Estimates, scope, prices, schedule promises, change orders and permits stay with you. The receptionist does not price a job, agree a start date or make any professional call. It captures what you need to do those things quickly and tells the caller who will follow up.",
          "Anything the receptionist cannot handle goes to a person with the details already captured, so the caller does not have to repeat themselves. Routing, coverage and fallback are tested with real call scenarios before launch."
        ]
      },
      {
        "heading": "How it fits Jobber, Housecall Pro, ServiceTitan or a spreadsheet",
        "paragraphs": [
          "Home-service businesses run on a mix: Jobber, Housecall Pro, ServiceTitan, HubSpot, or a shared calendar and a notes app. LYCORE does not claim native integrations with any of them. Connection options are checked against your tools before a build is agreed.",
          "Where a connection is not possible, the summary goes to the person or inbox you name, and your team enters it. You also keep your own phone and your own customer records. The receptionist works around them."
        ]
      },
      {
        "heading": "How to judge whether it is working",
        "paragraphs": [
          "Pick your measures before launch and review them after a few weeks. These are measures to agree, not promised results, and outcomes are never guaranteed.",
          "Call recording and consent requirements are reviewed during setup. You can hear the receptionist yourself with the Test our AI agent button, then book a free review on the booking page if you want to see how it would handle your calls."
        ],
        "list": [
          "Call answered rate across the working day and after hours",
          "Share of new inquiries with name, number, address and job type captured",
          "Time from a new inquiry to your notification",
          "How many calls were sorted as sales calls or wrong numbers",
          "Callbacks requested compared with callbacks completed"
        ]
      }
    ],
    "faqs": [
      {
        "question": "I run more than one trade. Can it handle different kinds of work?",
        "answer": "Yes. You give the receptionist the services you offer and the questions for each, and it asks the right ones based on what the caller describes. Anything outside your list is captured and passed to a person."
      },
      {
        "question": "Can it tell new leads from existing customers and subcontractors?",
        "answer": "It asks who is calling and why, then sorts by your rules. Matching a caller against your customer records depends on whether that data can be connected, which is checked before the build is agreed."
      },
      {
        "question": "What does it do with sales calls and wrong numbers?",
        "answer": "It handles them the way you decide: take a short message, decline politely, or pass them along. The summary lists them so you can see what was filtered."
      },
      {
        "question": "Will homeowners know it is not a person?",
        "answer": "Yes. It says up front that it is an AI assistant answering for your company. A caller who prefers a person can ask, and it hands over."
      },
      {
        "question": "How quickly will I hear about a new lead?",
        "answer": "You and LYCORE agree how and how fast notifications reach you during setup, and the time from call to notification is one of the measures you can track. It is not a promised figure."
      },
      {
        "question": "Is there a contract, and what does it cost?",
        "answer": "No long-term contract is required. The cost depends on call volume and what you want it to do, so pricing is given on a call after a free review, with no pressure and no obligation."
      }
    ]
  },
  "/industries/roofing": {
    "sections": [
      {
        "heading": "Answering service for roofers: what the phone does after a storm",
        "paragraphs": [
          "An answering service for roofers matters most the week after weather hits, when you are up on a roof and the phone will not stop. LYCORE's AI receptionist answers in your company name, captures the address and the damage, and logs an inspection request, so the list is waiting when you come down. This page covers what it asks, how it treats an active leak, and what it never does.",
          "Roofing calls are a mix. A homeowner with water coming through the ceiling needs someone now. A homeowner with missing shingles wants an inspection this week. Others are checking a quote you sent, an adjuster wants to schedule a visit, a supplier confirms a delivery, or a crew member is running late.",
          "Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered, and that fewer than 3% of callers sent to voicemail leave a message. After a storm, homeowners call several roofers and often talk to whoever picks up. Your competitors have the same weather.",
          "The phone problem is timing. A storm hits, calls arrive in a burst, and the roofers who answer first tend to book the inspections. You are the one who has to be on the roof, so the call has to be answered without you."
        ]
      },
      {
        "heading": "What a roofing call looks like from greeting to inspection request",
        "paragraphs": [
          "The receptionist answers with your company name and says it is an AI assistant. It captures the caller's name, number and property address, then asks the questions you approve about the roof and what happened. If the caller asks for a person, it says so and hands over.",
          "The receptionist does not diagnose damage from a description or say what a repair will cost. It records what the caller reports and logs an inspection or estimate request. Where your calendar can be connected, it can offer inspection windows and record the booking. Otherwise it captures the request and your team confirms a time.",
          "You receive a summary for each call with the address, the reported damage, the urgency under your rules and what the caller was told to expect. That gives you something to act on instead of a voicemail to decode."
        ],
        "list": [
          "Storm, age, leak, missing shingles or a request for a replacement quote",
          "Whether water is coming in now",
          "Whether the caller wants a tarp or emergency cover if you offer it",
          "Whether an insurance claim is open, recorded as information only",
          "Roof type and number of stories, if the caller knows",
          "Best time for an inspection or callback"
        ]
      },
      {
        "heading": "Storm season, active leaks and after-hours calls",
        "paragraphs": [
          "You set what counts as urgent. An active leak or a tree on the roof may go straight to your on-call phone by live transfer where your phone setup supports it. A cracked shingle can go into the inspection queue in order of arrival or by your own priorities.",
          "You approve what happens if nobody answers the transfer: a second number, then a full message marked urgent and a notification to you. Those paths are tested with real call scenarios before launch. Storm weeks are when they matter most, so it is worth testing them before the season, not during it.",
          "The receptionist answers at night and on weekends in the same way. During a busy week it answers each call, captures the details and lets you work down a sorted list. Whether you can get to every inspection is still a question of crews and daylight, and no tool changes that."
        ]
      },
      {
        "heading": "What stays with you: inspections, prices and insurance",
        "paragraphs": [
          "Inspections, prices, insurance guidance and roof safety stay with people. The receptionist does not tell a homeowner what their policy covers or how a claim will go, and it does not promise an inspection date you have not confirmed. It captures the facts and tells the caller who will follow up.",
          "If a caller is upset or asks a question outside your approved answers, it hands over to a person instead of guessing. For a roofing company with a good reputation to protect, that matters more than a smooth-sounding answer.",
          "Sales calls and wrong numbers arrive during storm season too, including calls from people selling leads or materials. The receptionist can take a short message or decline them the way you set, so they do not take up the line."
        ]
      },
      {
        "heading": "How it fits your roofing software",
        "paragraphs": [
          "Roofing companies use a range of tools: Jobber, ServiceTitan, HubSpot, roofing-specific CRMs, or a calendar and a spreadsheet. LYCORE does not claim a native integration with any of them. What can be connected depends on your tools and is checked before a build is agreed.",
          "If no connection is available, the summary goes to the person or inbox you name and your team enters the lead. The receptionist can also send an approved missed call text back to callers whose calls go unanswered, with STOP handling, and replies route to you or your team."
        ]
      },
      {
        "heading": "How to judge whether it is working",
        "paragraphs": [
          "Agree the measures before launch, then review them after a storm week and a quiet week. They are measures to agree, not promised results. Outcomes are never guaranteed.",
          "Call recording and consent requirements are reviewed during setup. Try the receptionist with the Test our AI agent widget, then book a free review on the booking page."
        ],
        "list": [
          "Call answered rate during busy weeks and after hours",
          "Share of calls with address and damage captured",
          "Time from an active-leak call to your notification",
          "Inspection requests logged compared with inspections completed",
          "Calls that needed a person to step in"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Will it promise a homeowner an inspection date?",
        "answer": "Only if your calendar can be connected and you have approved offering times. Otherwise it logs an inspection request and tells the caller your team will confirm the time. It does not invent availability."
      },
      {
        "question": "Can it answer insurance questions?",
        "answer": "No. It can record that a claim is open and the carrier name if the caller volunteers it, but it does not advise on coverage or claims. Those questions go to your team."
      },
      {
        "question": "What happens in a storm week when the phone will not stop?",
        "answer": "It answers every call at any hour, captures the address and damage, and ranks the calls by your rules, so you see a sorted list rather than a voicemail pile. It does not add crew capacity, so you still have to work the list."
      },
      {
        "question": "Can it tell a caller how to tarp a roof or stop a leak?",
        "answer": "No. It does not give safety or repair advice of its own. You can approve wording for specific situations, and anything else goes to a person."
      },
      {
        "question": "Does a missed call text back help as well?",
        "answer": "It can. If a call goes unanswered, an approved text goes to the caller with STOP handling, and replies route to you or your team. Consent requirements are reviewed during setup, and you should confirm the rules with your own advisor."
      },
      {
        "question": "Is there a contract, and what does it cost?",
        "answer": "No long-term contract is required. The cost depends on your call volume and what you want it to do. Pricing is quoted on a call after a free review, with no pressure and no obligation."
      }
    ]
  },
  "/industries/electrical": {
    "sections": [
      {
        "heading": "Electrician answering service: sorting the calls that cannot wait",
        "paragraphs": [
          "An electrician answering service has to know the difference between a tripped breaker and a burning smell. LYCORE's AI receptionist answers in your business name, captures the job and the address, and flags urgent calls by the rules you set. This page explains how an answering service for electricians works on a real call, and where a person still has to decide.",
          "Your calls are not all alike. A panel upgrade quote or an EV charger install can wait for a callback, while dead outlets or a whole house without power need attention today, and sparks, smoke or a burning smell are urgent again. Some calls are a landlord or property manager sending you tenants, a supplier, or a wrong number.",
          "Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered, and that fewer than 3% of callers sent to voicemail leave a message. When you are in an attic or a panel, you cannot take the call. The caller with the burning smell will call the next electrician."
        ]
      },
      {
        "heading": "What an electrical call looks like from greeting to callback request",
        "paragraphs": [
          "The receptionist answers in your business name and says it is an AI assistant. It captures the caller's name, number, address and reason for calling, then asks the electrical questions you approve. A caller who wants a person gets one, or a handover.",
          "It records what the caller reports and does not interpret it. It does not say what is wrong with a circuit, whether it is safe to reset a breaker, or whether a job needs a permit. Those judgments stay with a licensed person.",
          "You receive a summary with the details, the urgency under your rules and what the caller was told. Where your calendar or booking tool can be connected, the receptionist can offer visit times and record the booking. Otherwise it captures a visit or estimate request for your team to confirm.",
          "The intake questions are yours. An electrician doing service calls needs different ones from a contractor doing new construction and tenant improvements, so the receptionist asks what fits your work and stops short of anything you have not approved."
        ],
        "list": [
          "Whole property without power, part of it, or a single circuit or outlet",
          "Whether anything has sparked, smoked or smelled burnt",
          "Whether the caller owns the property, rents, or manages it",
          "Residential or commercial",
          "Type of work: repair, install, upgrade, inspection follow-up",
          "Best callback number and window"
        ]
      },
      {
        "heading": "Answering service for electricians: urgent calls, storms and after hours",
        "paragraphs": [
          "You define what is urgent. Many electricians treat sparks, smoke, a burning smell, or water near live wiring as top priority. You can approve wording that tells those callers to contact emergency services first, and the receptionist flags the call for you at the same time.",
          "For urgent calls, live transfer to your on-call phone is included where your phone setup supports it. You approve what happens if nobody answers: a second number, then a full message marked urgent and a notification to you. Those paths are tested with real call scenarios before launch.",
          "Storms and outages bring a burst of calls, and holidays bring install requests. The receptionist answers at any hour, ranks the calls by your rules, and puts routine work in the morning queue with the details your office needs."
        ]
      },
      {
        "heading": "What stays with you: diagnosis, quotes and safety",
        "paragraphs": [
          "Diagnosis, price, code and permit questions, and any safety judgment stay with you. The receptionist does not give a quote, promise an arrival time you have not approved, or advise a caller to keep using a circuit. It says a licensed person will follow up and captures what that person needs.",
          "Landlords and property managers often authorize work for tenants. The receptionist can capture who is authorizing the visit and who to contact on site, and your team decides whether to take the job.",
          "Your license and your name are on the work, which is why those decisions stay with a person. The receptionist's job is to make sure the person has the facts when they call back."
        ]
      },
      {
        "heading": "How it fits ServiceTitan, Housecall Pro, Jobber and your calendar",
        "paragraphs": [
          "Electrical contractors commonly run jobs in ServiceTitan, Housecall Pro or Jobber, or in a shared calendar. LYCORE does not claim a native integration with any of them. What can be connected depends on your tools and is checked before a build is agreed.",
          "If no connection is possible, summaries go to the person or inbox you choose. Your team then enters the job. That keeps the receptionist from changing records it should not touch."
        ]
      },
      {
        "heading": "How to judge whether it is working",
        "paragraphs": [
          "Agree your measures before launch and review them after a few weeks. They are measures to agree, not promised results, and outcomes are never guaranteed.",
          "Call recording and consent requirements are reviewed during setup. You can try the receptionist with the Test our AI agent button on this site, then book a free review on the booking page."
        ],
        "list": [
          "Call answered rate on and off shift",
          "Share of calls with address, symptom and contact captured",
          "Time from a flagged urgent call to your notification",
          "Urgent calls correctly flagged, checked on a sample of calls",
          "Callbacks requested compared with callbacks completed"
        ]
      }
    ],
    "faqs": [
      {
        "question": "What does it do when a caller mentions sparks or a burning smell?",
        "answer": "It flags the call as urgent under your rules and follows your transfer or notification path. If you have approved wording that tells such callers to contact emergency services first, it uses that. It does not give electrical safety advice of its own."
      },
      {
        "question": "Can it tell a caller whether it is safe to reset the breaker?",
        "answer": "No. Safety judgments stay with a licensed person. It records what the caller reports and passes it to you."
      },
      {
        "question": "Can it book panel upgrade or EV charger estimates?",
        "answer": "If your calendar or booking tool can be connected, it can offer times and record the booking. Otherwise it captures the estimate request with the details you need, and your team confirms the visit."
      },
      {
        "question": "How does it handle landlords and property managers?",
        "answer": "It can ask who owns the property, who is authorizing the work and who will be on site, and record the answers. Your team decides whether to accept the job."
      },
      {
        "question": "Does it work for a one-person shop as well as a larger crew?",
        "answer": "Yes. The rules are yours, so a one-person shop can send everything to one phone, while a larger crew can route by job type or by who is on call. Coverage is tested with real call scenarios before launch."
      },
      {
        "question": "Is there a contract, and what does it cost?",
        "answer": "No long-term contract is required. Cost depends on call volume and what you want it to do, so pricing is quoted on a call after a free review, with no pressure and no obligation."
      }
    ]
  },
  "/industries/pest-control": {
    "sections": [
      {
        "heading": "Pest control answering service: the calls that come in while you are in a crawlspace",
        "paragraphs": [
          "A pest control answering service has to handle two kinds of caller: someone with a problem this minute and a customer on a route who just wants to move a visit. LYCORE's AI receptionist answers in your company name, captures the address and the pest problem, and sorts the call by your rules. Your technicians stay on the route.",
          "Most of your calls are not emergencies, but they are still time-sensitive. A homeowner who has just found ants, mice or a wasp nest is calling several companies and will book one that picks up. Recurring customers call to reschedule or ask when the next visit is. Some call because the pests came back between visits.",
          "Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered, and that fewer than 3% of callers sent to voicemail leave a message. When you are treating a home, you cannot take a new-customer call. Voicemail tends to lose it.",
          "The receptionist does not replace your route schedule or your technicians. It answers the calls that would otherwise reach voicemail while you are on a treatment, and it passes them to your office in a form your office can use."
        ]
      },
      {
        "heading": "What a pest control call looks like",
        "paragraphs": [
          "The receptionist answers with your company name and says it is an AI assistant. It captures the caller's name, number, address and reason for calling, then asks the questions you approve about the pest and the property. If the caller wants a person, it hands over.",
          "The receptionist records what the caller describes and does not identify pests or recommend treatments. That is your technician's call. It also does not advise on chemicals, pets or allergies. If you want it to ask whether children or pets are in the home so your technician knows, it records the answer and does not comment on it.",
          "You receive a summary for each call. Where your calendar or booking tool can be connected, the receptionist can offer times and record the booking. Otherwise it captures a service or callback request for your team to confirm."
        ],
        "list": [
          "What the caller has seen and where: kitchen, attic, yard, walls, crawlspace",
          "How long it has been going on",
          "Home or business, and property type",
          "New customer, existing customer or a return between visits",
          "Whether the caller owns or rents the property",
          "Best callback window"
        ]
      },
      {
        "heading": "Seasonal peaks, urgent calls and after hours",
        "paragraphs": [
          "Pest calls rise and fall with the seasons: ants and wasps in warm months, rodents when it turns cold, and termite questions in swarm season. When the phone is at its busiest, you are also busiest. The receptionist answers each call, captures the details and puts them in order for your office.",
          "You define what counts as urgent. Examples might be stinging insects near a door, a rodent problem at a restaurant, or a commercial account with an inspection coming. For urgent calls, live transfer is included where your phone setup supports it, and you approve what happens if nobody answers.",
          "After hours the receptionist answers the same way. A homeowner who spots a nest at 8 p.m. gets a real answer and a callback request instead of a voicemail box. A missed call text back can also go to callers whose calls go unanswered, with STOP handling."
        ]
      },
      {
        "heading": "Recurring customers and what stays with your technicians",
        "paragraphs": [
          "Much of a pest control book is repeat work. The receptionist can take reschedule requests, record the reason and pass them to your office, or book a new time where your scheduling tool is connected. Renewal and reminder follow-up can be scoped separately, using approved messages and respecting opt-outs.",
          "Pest identification, treatment choices, chemical safety, pricing, warranties and retreatment decisions stay with you. When a caller says the pests are back, the receptionist captures the details and flags it for your team. It does not promise a free retreatment.",
          "You also decide what it says about your service. It can state your service area, the types of pests you treat and the way you handle recurring plans, but only in wording you have approved. Anything else goes to a person."
        ]
      },
      {
        "heading": "How it fits GorillaDesk, FieldRoutes, PestPac or Jobber",
        "paragraphs": [
          "Pest control companies commonly run routes and billing in GorillaDesk, FieldRoutes, PestPac or Jobber. LYCORE does not claim a native integration with any of them. What can be connected depends on your tools and is checked before a build is agreed.",
          "Where a connection is not possible, the summary goes to the person or inbox you name and your office enters the job. That keeps your route software as the record."
        ]
      },
      {
        "heading": "How to judge whether it is working",
        "paragraphs": [
          "Agree your measures before launch and review them after the first few weeks and again in a busy month. They are measures to agree, not promised results, and outcomes are never guaranteed.",
          "Call recording and consent requirements are reviewed during setup. Try the receptionist with the Test our AI agent widget, then book a free review on the booking page."
        ],
        "list": [
          "Call answered rate, including during route hours",
          "Share of calls with pest, address and contact captured",
          "Time from an urgent call to your notification",
          "Reschedule requests handled without staff involvement, checked on a sample",
          "Calls that needed a person to step in"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can it handle recurring customers who call to reschedule?",
        "answer": "Yes. It can take the request, record the reason and pass it to your office, or offer times where your scheduling tool can be connected. Whether it can change a route directly is checked before the build is agreed."
      },
      {
        "question": "What if the caller does not know what pest it is?",
        "answer": "It records what the caller describes, such as where it was seen and what it looks like, and passes that to your technician. It does not identify the pest or suggest a treatment."
      },
      {
        "question": "Can it answer questions about chemicals or safety around pets?",
        "answer": "No. Chemical and safety questions stay with your technicians. The receptionist captures the question and hands it to a person."
      },
      {
        "question": "Do we need a connection with our route software?",
        "answer": "Not necessarily. Where GorillaDesk, FieldRoutes, PestPac, Jobber or another tool can be connected, that is checked before the build is agreed. If not, summaries go to your office and your team enters the job."
      },
      {
        "question": "What about wasp and rodent calls that cannot wait?",
        "answer": "You decide which situations count as urgent. Those calls can go to your on-call phone by live transfer where your phone setup supports it, with a fallback you approve if nobody answers."
      },
      {
        "question": "Is there a contract, and what does it cost?",
        "answer": "No long-term contract is required. Cost depends on call volume and what you want it to do, so pricing is quoted on a call after a free review, with no pressure and no obligation."
      }
    ]
  },
  "/industries/locksmiths": {
    "sections": [
      {
        "heading": "Locksmith answering service: the lockout call that goes to whoever answers first",
        "paragraphs": [
          "A locksmith answering service has to be there at 11 p.m. when someone is standing outside their car with a dead phone battery. LYCORE's AI receptionist answers in your business name, captures exactly where the caller is and what is locked, and passes your technician a callback request. It runs at any hour, when a lockout is most likely to happen.",
          "Locksmith calls have a shape. A car lockout or a home lockout is urgent, and the caller is often outside and stressed. A rekey after a move, a lock change or a quote for a commercial job can wait for a callback. There are also calls that look like leads but are not, such as callers outside your area, price shoppers, and wrong numbers.",
          "Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered, and that fewer than 3% of callers sent to voicemail leave a message. A locked-out caller with a phone that is running out of charge is not going to leave a message and wait. They will call the next locksmith on the list.",
          "There is also the caller who cannot describe where they are. The receptionist keeps asking for a landmark, a cross street or a business name until you have a place to send someone, and it tells the caller who will call back."
        ]
      },
      {
        "heading": "What a lockout call looks like from greeting to callback request",
        "paragraphs": [
          "The receptionist answers with your business name and says it is an AI assistant. It captures name, number and reason on every call, and for a lockout the priority is the location. It asks for an address, cross streets or a landmark, and asks whether the caller is somewhere they feel safe.",
          "It then asks what is locked and the details you have approved for that job. If a caller asks for a person, it says so and hands over instead of guessing.",
          "You receive a callback request with the location, the lock context, the urgency under your rules and what the caller was told. Price and arrival time are confirmed by you or your technician, not by the receptionist."
        ],
        "list": [
          "Exact location: address, cross streets, parking lot, floor or level",
          "What is locked: car, home, business, safe or garage",
          "For a vehicle, the make, model and year if you want them captured",
          "How long the caller has been waiting",
          "Whether the caller is somewhere safe and how to reach them",
          "Whether the location is inside your service area"
        ]
      },
      {
        "heading": "Nights, weekends and urgent lockouts",
        "paragraphs": [
          "Nights and weekends are when locksmith phones ring, and they are also when you are asleep or on another lockout. The receptionist answers at any hour, so the caller talks to your business rather than a voicemail box.",
          "For urgent lockouts, live transfer to your on-call technician is included where your phone setup supports it. You approve the transfer rules and what happens if nobody answers: a second number, then a full callback request marked urgent and a notification to you. Those paths are tested with real call scenarios before launch.",
          "You decide the service-area rules. A caller outside your area can be told so politely and, if you like, pointed elsewhere. If a caller says a child or an animal is locked in a vehicle, you can approve wording that tells them to contact emergency services first while the call is flagged for you."
        ]
      },
      {
        "heading": "What stays with you: price, arrival time and who you serve",
        "paragraphs": [
          "Price, arrival time, whether to take a job and how to verify the caller stay with you. If your policy is that the technician confirms ownership on arrival, you can approve wording that tells the caller so. The receptionist does not decide who is a legitimate customer.",
          "Callers will often ask how much and how long before anything else. The receptionist tells them your technician will confirm both, and captures what is needed to do that fast. It does not invent a figure or an arrival time.",
          "Locksmith work also draws calls you may not want, from suspicious requests to callers who cannot say where they are or what they own. Those decisions stay with you, and the summary gives you what you need to make them."
        ]
      },
      {
        "heading": "How it fits your dispatch and job software",
        "paragraphs": [
          "Locksmiths often dispatch by phone and text, or use a job app such as Jobber or Housecall Pro. LYCORE does not claim a native integration with any of them. What can be connected depends on your tools and is checked before a build is agreed.",
          "If nothing can be connected, the callback request goes to the phone or inbox you name, and you take it from there. For a solo technician the most useful summary is often the shortest one: location, lock, urgency and a number that works."
        ]
      },
      {
        "heading": "How to judge whether it is working",
        "paragraphs": [
          "Agree your measures before launch and review them after the first weeks. They are measures to agree, not promised results, and outcomes are never guaranteed.",
          "Call recording and consent requirements are reviewed during setup. Try the receptionist with the Test our AI agent widget, then book a free review on the booking page."
        ],
        "list": [
          "Call answered rate, especially between 9 p.m. and 6 a.m.",
          "Share of lockout calls with a usable location captured",
          "Time from an urgent call to your notification",
          "Out-of-area calls identified correctly, checked on a sample",
          "Calls that needed a person to step in"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can it tell whether the caller owns the car or home?",
        "answer": "No. Verifying who is entitled to the service stays with your technician. The receptionist can ask what you approve and, if it is your policy, tell the caller that ownership will be confirmed on arrival."
      },
      {
        "question": "Will it give the caller a price or an arrival time?",
        "answer": "No. Your technician or office confirms both. The receptionist tells the caller who will follow up and captures what is needed."
      },
      {
        "question": "Can it filter out callers who are outside my service area?",
        "answer": "Yes, using the service area you set. It can politely tell those callers you do not cover them, and the summary shows which calls it declined so you can check."
      },
      {
        "question": "What if a child or pet is locked in a car?",
        "answer": "You approve the wording for that situation in advance. Typically it tells the caller to contact emergency services first, and it flags the call as urgent for you at the same time."
      },
      {
        "question": "Will callers hang up when they hear it is an AI?",
        "answer": "It says up front that it is an AI assistant, and callers who want a person can ask for one. Live transfer to your on-call technician is included where your phone setup supports it."
      },
      {
        "question": "Is there a contract, and what does it cost?",
        "answer": "No long-term contract is required. Cost depends on call volume and what you want it to do, so pricing is quoted on a call after a free review, with no pressure and no obligation."
      }
    ]
  },
  "/industries/restoration": {
    "sections": [
      {
        "heading": "Water damage restoration answering service: answering the call that decides who gets the job",
        "paragraphs": [
          "A water damage restoration answering service has to work at 2 a.m., because that is when a pipe bursts. LYCORE's AI receptionist answers in your company name, captures the type of loss, the address and how urgent it is, and alerts your response team by the rules you set. The caller has a wet floor and a lot of questions, and one call decides who gets the work.",
          "Your calls are varied. A flooded basement, a sewage backup and a smoke damage call are all urgent, though not in the same way. Others are an insurance adjuster, a property manager, a plumber referring work, a past client, or someone asking about mold. Some are wrong numbers and sales calls.",
          "Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered, and that fewer than 3% of callers sent to voicemail leave a message. ServiceTitan's 2022 call data found that smaller shops booked about 26% of calls at peak times and about 9% after 6 p.m. Someone standing in water does not keep waiting on voicemail.",
          "The call is also the first impression. A caller who has just found water in the basement is deciding whether your company sounds organized. Getting the address, the source and a callback number in the first minute is what lets your team arrive prepared."
        ]
      },
      {
        "heading": "What a restoration call looks like from greeting to alert",
        "paragraphs": [
          "The receptionist answers in your company name and says it is an AI assistant. It captures name, number, address and reason on every call, then asks about the loss using the questions you approve. If the caller asks for a person, it says so and hands over.",
          "It records what the caller reports and does not judge the scope of the damage, the cause or whether the property is safe to enter. You receive a summary with the type of loss, the address, the urgency under your rules and what the caller was told.",
          "Where your calendar or dispatch tool can be connected, the receptionist can offer times and record the booking. Otherwise it captures a response request for your team to confirm. What can be connected is checked before the build is agreed."
        ],
        "list": [
          "Type of loss: clean water, sewage, storm, fire and smoke",
          "Whether the source has been stopped or is still running",
          "Which rooms or areas are affected, as the caller describes them",
          "Whether the property is occupied, and who is on site",
          "Residential or commercial",
          "Insurance carrier and claim number, recorded as information only"
        ]
      },
      {
        "heading": "After hours, escalation and storm days",
        "paragraphs": [
          "You define urgent. Active water, a sewage backup or an occupied property with no power might go to your on-call project manager immediately, while a mold question can wait for the morning. The receptionist follows your list.",
          "Live transfer to the on-call person is included where your phone setup supports it. You approve the rules and what happens if nobody answers: a second number, then a full message marked urgent and a notification to you. Those paths are tested with real call scenarios before launch.",
          "Freezes and storms can bring several losses in a day. The receptionist answers each call, captures the details and ranks them by your rules, so dispatch works from a sorted list. It does not add crews or equipment, so capacity stays your constraint."
        ]
      },
      {
        "heading": "What stays with you: scope, safety and insurance",
        "paragraphs": [
          "Scope, price, mitigation decisions and safety judgments stay with your team. The receptionist does not tell a caller whether it is safe to stay in the property, whether mold is present, or what insurance will cover. You can approve wording for specific situations, and anything else goes to a person.",
          "When an adjuster or property manager calls, it captures who they are, the claim or property details they give and the best number, and passes it on. It does not discuss coverage or make commitments on your behalf.",
          "Restoration calls often involve several people: the homeowner, a tenant, a property manager, an adjuster. The receptionist captures who each person is and how to reach them, so your project manager starts the job with the right contacts."
        ]
      },
      {
        "heading": "How it fits your job management software",
        "paragraphs": [
          "Restoration companies use job management, estimating and CRM tools such as ServiceTitan, Jobber or HubSpot, plus documentation apps for drying and moisture logs. LYCORE does not claim a native integration with any of them. What can be connected depends on your tools and is checked before a build is agreed.",
          "If a live connection is not available, the summary goes to the person or inbox you name and your team creates the job. Your systems stay the record."
        ]
      },
      {
        "heading": "How to judge whether it is working",
        "paragraphs": [
          "Agree your measures before launch and review them after the first few weeks and after a busy stretch. They are measures to agree, not promised results, and outcomes are never guaranteed.",
          "Call recording and consent requirements are reviewed during setup. Try the receptionist with the Test our AI agent widget, then book a free review on the booking page."
        ],
        "list": [
          "Call answered rate, including overnight",
          "Share of loss calls with type, address and source status captured",
          "Time from an urgent call to your on-call notification",
          "Urgent calls reaching a person under your fallback rules",
          "Calls that needed a person to step in"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can it reach my on-call project manager at 3 a.m.?",
        "answer": "Live transfer is included where your phone setup supports it, using rules you approve. If the person does not answer, the fallback you set applies, such as a second number and a full message marked urgent with a notification to you."
      },
      {
        "question": "Does it talk to insurance adjusters?",
        "answer": "It answers the call, captures the adjuster's name, the claim details they give and a callback number, and passes it to your team. It does not discuss coverage or make commitments on your behalf."
      },
      {
        "question": "Can it tell a caller what to do until the crew arrives?",
        "answer": "Only with wording you have approved for a specific situation. Safety judgments and mitigation decisions stay with your team, and anything outside the approved wording goes to a person."
      },
      {
        "question": "What happens on storm days when several losses come in?",
        "answer": "It answers each call, captures the details and ranks them by your rules so dispatch has a sorted list. It does not add crews or equipment, so how fast you can respond still depends on your capacity."
      },
      {
        "question": "Does it record calls?",
        "answer": "Recording depends on how the setup is configured. Call recording and consent requirements are reviewed during setup, and you should confirm the rules with your own advisor."
      },
      {
        "question": "Is there a contract, and what does it cost?",
        "answer": "No long-term contract is required. Cost depends on call volume and what you want it to do, so pricing is quoted on a call after a free review, with no pressure and no obligation."
      }
    ]
  },
  "/industries/dentists": {
    "sections": [
      {
        "heading": "Answering service for dentists: what your front desk phone actually carries",
        "paragraphs": [
          "If you are weighing an answering service for dentists, start with the calls your desk really takes. Most are new patient requests, existing patients moving an appointment, questions about hours, location and insurance, and a smaller number from people who need something clinical. The routine ones arrive while someone is checking in a patient or holding on with an insurance company.",
          "A new patient who reaches voicemail may simply try the next practice on the list. An existing patient with a simple question may wait a day for an answer that takes ten seconds. Your AI receptionist takes those routine calls in your practice's name at any hour.",
          "The clinical calls are a different matter. A patient describing pain, swelling or a broken tooth is asking someone with training to judge how urgent it is. Your receptionist does not make that judgment. It recognizes that the call is clinical, says a member of the team will need to speak with them, and sends it to your staff by the route you set."
        ]
      },
      {
        "heading": "What a call looks like from start to finish",
        "paragraphs": [
          "The receptionist answers with your practice's name and says it is an AI assistant acting for the practice. A caller can ask for a person at any point, and it hands over rather than guessing. It then asks only the questions you have approved.",
          "On a new patient call it asks who is calling, the best number, what the call is about in a sentence, and which days and times suit them. If you want it, it also asks for the insurance carrier's name so your team can check before the visit. If the caller asks whether you accept a plan, it answers only from the list you give it, and for anything not on that list it says the team will confirm.",
          "Where your scheduling software can be connected, the receptionist can offer open times and record the booking. Where it cannot, it captures a booking or callback request and your team confirms it. Either way you get a short summary of the call, and what can be connected is checked before the build is agreed."
        ],
        "list": [
          "Caller name and best callback number",
          "New or existing patient",
          "Reason for the call, in the caller's words",
          "Preferred days and times",
          "Insurance carrier, if you choose to ask",
          "Whether they prefer a call or a text back"
        ]
      },
      {
        "heading": "After hours, lunch breaks and busy mornings",
        "paragraphs": [
          "You decide when the receptionist picks up. Some practices let the front desk answer first and send calls to the receptionist after a set number of rings or when every line is busy. Others send everything to it during lunch and after close.",
          "The hard case is a patient in pain at 9 p.m. Your receptionist does not decide whether it is an emergency, and it does not tell the caller to wait or to come in. It gives the wording you approved for after-hours calls, takes their name and number, and notifies your on-call dentist or staff member if you have one. If nobody answers, the fallback you approved runs, and the summary is waiting for the desk when it opens.",
          "Wording about when a caller should contact emergency services is yours to write, because LYCORE does not supply clinical guidance. Missed call text back can also send a short approved text after an unanswered call, with STOP handling, so the caller has a next step in hand."
        ]
      },
      {
        "heading": "What stays with your team and where the line sits",
        "paragraphs": [
          "Everything clinical stays with your staff. The receptionist gives no diagnosis, no advice about pain or medication, no view on whether a problem needs to be seen today, and no treatment recommendations. It does not quote fees for procedures unless you have supplied approved information to share.",
          "Callers sometimes volunteer health details. The intake questions are written so they do not ask for them, and a caller who starts describing symptoms is steered toward getting the request to your team. If you ever want a connection to patient records, that is reviewed with you and your own advisor before anything is agreed, because the rules that apply to your practice are yours to confirm.",
          "Call recording and consent requirements are reviewed during setup. Routing, coverage and fallback are tested with real call scenarios before launch."
        ],
        "list": [
          "Any description of pain, swelling, bleeding or a damaged tooth",
          "Questions about medication or care after a procedure",
          "Whether a problem needs to be seen today",
          "Treatment recommendations and the cost of procedures",
          "Billing disputes and complaints",
          "Any caller who asks for a person"
        ]
      },
      {
        "heading": "Fit with your practice software, and how to judge whether it works",
        "paragraphs": [
          "Dental practices commonly run Dentrix, Open Dental, Eaglesoft or Curve Dental. LYCORE is not a partner of those companies and does not claim native integrations with them. Whether the receptionist can offer live times or hands your desk a request to confirm depends on your setup, and that is checked before a build is agreed.",
          "Agree how you will judge it before launch, not after. Useful measures are calls answered against calls missed, new patient requests captured, clinical calls that reached staff and how quickly, and callbacks completed within the time you set. Read a sample of call summaries with your office manager in the first weeks and adjust the approved answers.",
          "None of this comes with a promised result, and outcomes are never guaranteed. The measures are there so you can decide with your own numbers. You can try the receptionist with the Test our AI agent widget, or book a free review for a plain answer on fit, with no pressure and no obligation."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can the receptionist tell a caller whether we accept their insurance?",
        "answer": "Only from a list you approve. If the plan is on the list it says so, and if it is not, or the caller asks about coverage for a procedure, it says the team will confirm. It never guesses at what a plan will pay."
      },
      {
        "question": "What happens when a patient calls at night with a toothache?",
        "answer": "The receptionist gives the after-hours wording you approved, takes the patient's name and number, and notifies whoever you name as on call. It does not judge how serious the problem is or tell the caller what to do about it. If nobody responds, your approved fallback runs."
      },
      {
        "question": "Will it work with Dentrix or Open Dental?",
        "answer": "That depends on your setup, and LYCORE does not claim a native connection to either. Where your scheduling tool can be connected the receptionist can offer times, and where it cannot it passes a booking request to your desk. What is possible is checked before the build is agreed."
      },
      {
        "question": "Will patients know they are talking to an AI?",
        "answer": "Yes. It says at the start that it is an AI assistant acting for your practice, and any caller can ask for a person. It hands over rather than guess."
      },
      {
        "question": "Can existing patients use it to move an appointment?",
        "answer": "It can take the request and pass it to your team, and if your scheduling software can be connected it may be able to offer times. Your rules decide what it is allowed to change, and anything unclear goes to a person."
      },
      {
        "question": "Is there a long-term contract?",
        "answer": "No long-term contract is required. Pricing is quoted on a call after a free review, and the review carries no pressure and no obligation."
      }
    ]
  },
  "/industries/med-spas": {
    "sections": [
      {
        "heading": "Answering service for med spas: the calls that come in while you are with a client",
        "paragraphs": [
          "An answering service for med spas covers one repeated moment: your team is in a treatment room, the phone rings, and nobody can pick up. Most of those calls are consultation requests, existing clients booking or moving a visit, and questions about services, packages and memberships.",
          "Someone comparing med spas often calls two or three and books with the one that answers or calls back first. Your AI receptionist answers in your spa's name, so that call is captured while your clinician stays with the client in front of them.",
          "Some calls should be handled by no one but your clinical team, such as a caller asking whether a treatment is right for them or a client worried about how they look after a visit. The receptionist recognizes these, does not answer them, and passes them to staff by the rule you set.",
          "Existing clients call for simpler reasons: to move a visit, ask about a package, or check when you close on a holiday. Those are quick for a person and easy to lose on a busy day. The receptionist takes the request or hands it to your desk by your rules."
        ]
      },
      {
        "heading": "What a consultation call looks like, start to finish",
        "paragraphs": [
          "The receptionist says it is an AI assistant acting for your spa, and the caller can ask for a person at any time. It then asks the questions you have approved: name, best number, what the caller is interested in, in their own words, whether they are new or returning, and which days and times suit them. If you want it, it also asks how they heard about you.",
          "When the caller has a question, it answers only what you have approved and written down. Anything outside that list gets a plain answer that the team will confirm, and it does not fill the gap with a guess.",
          "Where your booking tool can be connected, it can offer consultation times and record the booking. Otherwise it captures a consultation or callback request for your team to confirm. What can be connected is checked before the build is agreed, and you receive a summary of each call."
        ],
        "list": [
          "Opening hours and location",
          "How a consultation is booked and how long it takes",
          "Your cancellation and late-arrival policy, as you wrote it",
          "Which services are on your menu, by name",
          "Parking and arrival instructions"
        ]
      },
      {
        "heading": "Evenings, weekends and busy clinic days",
        "paragraphs": [
          "Callers phone whenever they find a minute, and that is often outside your hours. The receptionist answers at any hour, captures the request, and puts the summary in front of your team for the next morning.",
          "On a busy clinic day you can let the front desk answer first and send calls to the receptionist after a set number of rings or when lines are busy. Live transfer is included where your phone setup supports it, and you approve the transfer rules and what happens if nobody answers.",
          "Missed call text back can send an approved text after an unanswered call, for example one that points to your booking page. It handles STOP and opt-out replies, routes real replies to your team, and consent requirements are reviewed during setup.",
          "Lead follow-up respects the quiet hours and opt-outs you set, so a caller is not messaged late at night. A reply that needs a person, such as a question about a treatment, goes straight to your team and stops any automated follow-up."
        ]
      },
      {
        "heading": "What stays with your clinical team and the compliance line",
        "paragraphs": [
          "The receptionist gives no treatment advice. It does not say whether someone is a good candidate, what a treatment will do for them, how it compares with another, or what to avoid before an appointment. Those conversations belong to your clinician at the consultation.",
          "Prices are yours to state. It repeats a figure only if you have given it one to share, in your wording, and it adds no claims of its own to your advertising. Custom quotes go to the consultation.",
          "A client calling about a reaction or a concern after a visit goes to your staff straight away under the escalation rule you set. The receptionist does not reassure or instruct, and it is set up not to collect medical history, which belongs to your forms and your clinician. Call recording and consent requirements are reviewed during setup."
        ],
        "list": [
          "Whether a treatment suits a particular person",
          "Anything about side effects, reactions or healing",
          "Medication, medical history and contraindications",
          "Custom pricing, packages and discounts you have not approved",
          "Complaints and refund requests",
          "Any caller who asks for a person"
        ]
      },
      {
        "heading": "Fit with your booking software, and how to judge whether it works",
        "paragraphs": [
          "Med spas commonly use tools such as Boulevard, Vagaro, Mindbody, Mangomint or Zenoti. LYCORE is not a partner of those companies and does not claim native integrations. Whether the receptionist can offer live times or hands your team a request depends on your tools, and that is checked before a build is agreed.",
          "Agree the measures before launch. Useful ones are calls answered against calls missed, consultation requests captured, requests that became booked consultations in your own records, and how long callbacks took for requests it could not book. Show no-shows and cancellations separately so a single number does not hide them.",
          "Outcomes are never guaranteed, and these are proposed measures rather than results. Try the Test our AI agent widget on this site, then book a free review if you want a plain answer on fit, with no pressure and no obligation.",
          "Read the call summaries yourself in the first weeks. If the receptionist gave an answer you would not have given, the fix is to change the approved list, and you should do it early."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can the receptionist quote treatment prices?",
        "answer": "Only figures you give it to share, in your wording. Anything custom, such as a plan built around the client's goals, goes to the consultation. It does not invent a price or offer a discount."
      },
      {
        "question": "What if a caller asks whether they are a good candidate for a treatment?",
        "answer": "It does not answer. It says that question is for your clinician at the consultation and offers to book one or take a callback request. That boundary is fixed and does not depend on how the question is phrased."
      },
      {
        "question": "What happens if a client calls worried after a treatment?",
        "answer": "The call goes to your staff straight away under the escalation rule you approve. The receptionist does not reassure the client or tell them what to do. If nobody answers, your approved fallback runs."
      },
      {
        "question": "Will it book straight into Boulevard, Vagaro or Mindbody?",
        "answer": "That depends on the tool and your setup, and LYCORE does not claim native connections. Where your calendar can be connected it can offer times and record the booking. Otherwise it captures a request for your team to confirm."
      },
      {
        "question": "Does it collect medical history over the phone?",
        "answer": "No, it is set up not to. Health history belongs to your consent forms and your consultation with a clinician. The receptionist captures contact details, the interest and preferred times."
      },
      {
        "question": "Will callers know it is not a person?",
        "answer": "Yes. It says at the start that it is an AI assistant acting for your spa, and a caller can ask for a person at any time. It hands over rather than guess."
      }
    ]
  },
  "/industries/law-firms": {
    "sections": [
      {
        "heading": "AI receptionist for law firms: who calls and what they need",
        "paragraphs": [
          "An AI receptionist for law firms answers the calls that arrive while your lawyers are in a hearing, a deposition or a client meeting. They come from prospective clients, current clients asking for an update, other lawyers and court staff, vendors, and people who dialed the wrong firm.",
          "The prospective client is the call that matters most and the one most easily lost. Someone looking for a lawyer is often stressed and usually calls more than one firm, and a voicemail box can lose them. Your receptionist answers in the firm's name, so that call becomes a lead your intake person can pick up.",
          "Calls from current clients, opposing counsel and courts follow the rules you set. Typically they are taken as messages and routed to the lawyer or paralegal who owns the matter, or transferred live where your phone setup supports it. The receptionist does not discuss the substance of any matter.",
          "Some callers are not prospects at all: a process server, opposing counsel's office, a court clerk with a scheduling question. The receptionist records who called, from where and what they need, and sends it to the right person instead of leaving it in a voicemail box nobody checks until evening."
        ]
      },
      {
        "heading": "What an intake call looks like, start to finish",
        "paragraphs": [
          "The receptionist says it is an AI assistant acting for the firm and that it cannot give legal advice. If you approve a short notice, it can also say the call is not legal advice and that the firm has not agreed to take the matter. A caller can ask for a person at any point.",
          "It captures name, number, best time to call and the broad type of matter, for example family, injury, criminal defense or estates. It does not ask for a detailed case narrative. If a caller starts telling the whole story, it says a member of the team will take those details and steers the call back to contact information. If the caller mentions a court date or a deadline, it records that they mentioned one and flags the call as time sensitive under your rule, without interpreting it.",
          "If your firm wants the names of other parties so staff can run their own conflict check, that is a question you approve, and the receptionist only records the answer. Where your calendar can be connected it can offer consultation times you have opened. Otherwise it records a callback request, and either way the intake team gets a summary."
        ],
        "list": [
          "Name and best callback number",
          "Best time to call",
          "Broad matter type",
          "How they were referred, if you ask",
          "Whether a hearing or deadline was mentioned (recorded, not interpreted)",
          "Preferred consultation days"
        ]
      },
      {
        "heading": "After hours, overflow and urgent matters",
        "paragraphs": [
          "The receptionist answers at any hour. Some practice areas produce calls at night that a firm wants a person to see quickly, and you choose which categories trigger an alert to an on-call attorney or staff member, and by what channel. If that person does not respond, the fallback you approved runs.",
          "During the day it can take overflow when reception is on another line or the lawyers are in court. Live transfer to your intake person is included where your phone setup supports it, and you approve the transfer rules.",
          "Missed call text back can send a short text after an unanswered call. For a law firm the wording should be minimal, with no case details in it, and it handles STOP and opt-out replies. Consent requirements are reviewed during setup, and you should confirm the rules with your own advisor.",
          "Practice areas draw different callers, so the approved questions and alert rules are written with you for each area. A firm that handles both family matters and business disputes may want two sets of rules, and that is normal setup work."
        ]
      },
      {
        "heading": "What stays with your lawyers and staff",
        "paragraphs": [
          "The receptionist gives no legal advice, does not clear conflicts, does not calculate deadlines, and gives no opinion on whether the firm can help. Your staff decide whether to take a case. It does not quote fees unless you give it approved wording to read.",
          "Callers sometimes share confidential details without being asked. The intake questions are written not to ask for them, and the summary holds what intake needs. How long summaries and recordings are kept, and who at the firm can see them, are decisions for setup, along with recording consent, and your own ethics counsel or advisor should confirm what applies to you.",
          "Read a sample of summaries with your intake person in the first weeks. Look for calls where a caller was pushed toward a detail they should not be asked for, and change the approved questions if you find any."
        ],
        "list": [
          "Legal advice of any kind",
          "Conflict checks and clearance",
          "Deadlines, limitation periods and court dates",
          "Whether the firm takes the case",
          "Fee discussions and engagement terms",
          "Any caller who asks for a person"
        ]
      },
      {
        "heading": "Fit with your practice software, and how to judge whether it works",
        "paragraphs": [
          "Firms often use tools such as Clio, MyCase, Lawmatics or Filevine for intake and matter management. LYCORE is not a partner of those companies and does not claim native integrations. Whether an intake summary lands in your tool or reaches your intake person by email or text depends on your setup, and that is checked before a build is agreed.",
          "Agree the measures before launch. Useful ones are calls answered against calls missed, intake requests captured, time from a recorded call to assignment to your intake owner, callbacks completed within the time you set, and consultations attended out of those approved. Assignment is not a completed review, and the report should say so.",
          "Outcomes are never guaranteed, and these are proposed measures, not promised results. You can try the Test our AI agent widget, then book a free review for a plain answer on fit, with no pressure and no obligation."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does the receptionist give legal advice or tell callers whether they have a case?",
        "answer": "No. It gives no legal advice and no view on whether the caller has a case or whether the firm will take it. Staff make that decision after their own review."
      },
      {
        "question": "Will it ask callers to describe their situation in detail?",
        "answer": "No. It asks for contact details and the broad type of matter only. If a caller starts to tell the story, it says a member of the team will take those details."
      },
      {
        "question": "Can it run a conflict check?",
        "answer": "No. If you approve it, the receptionist can record the names of other parties so your staff can run the check. The decision on conflicts stays with the firm."
      },
      {
        "question": "What if a caller mentions a court date or a deadline?",
        "answer": "It records that the caller mentioned one and flags the call as time sensitive under your rule. It does not calculate, confirm or interpret the date. A person on your team follows up."
      },
      {
        "question": "How are current clients and opposing counsel handled?",
        "answer": "By the routing rules you set. The receptionist takes a message or transfers live where your phone setup supports it, and sends the call to the person who owns the matter. It does not discuss the matter itself."
      },
      {
        "question": "Does it work with Clio or MyCase?",
        "answer": "That depends on your setup, and LYCORE does not claim native integrations. Some firms have summaries sent to intake by email or text, and others connect a tool where that is possible. It is checked before a build is agreed."
      }
    ]
  },
  "/industries/real-estate": {
    "sections": [
      {
        "heading": "AI receptionist for real estate agents: the calls that come while you are at a showing",
        "paragraphs": [
          "An AI receptionist for real estate agents is built around one problem: buyers and sellers call when you cannot answer, because you are at a showing, at a closing, or in a car with a client. The calls are sign calls and portal inquiries about a listing, buyers asking to see a property, homeowners asking for a valuation, past clients, other agents, lenders and inspectors, and the occasional wrong number.",
          "A buyer who calls about a listing may be calling several agents' listings that afternoon. If yours rings out, they can move to the next number. Your receptionist answers in your name or your team's name, records which property they asked about and what they are looking for, and gets the details to you so you can call back quickly.",
          "It does not pretend to be you or to know more than it has been given. It is an AI assistant acting for you, and it says so at the start of every call."
        ]
      },
      {
        "heading": "What a listing inquiry looks like, start to finish",
        "paragraphs": [
          "The receptionist greets the caller, says it is an AI assistant acting for the agent, and asks which property or what kind of home they are calling about. It captures name, number, best time to call, whether they are buying, selling or both, their timing, and whether they already work with an agent.",
          "On listing questions it shares only what you have supplied and approved for that listing, such as the address, that it is listed with you, and open house times. It does not say a home is still available, that the price is negotiable, or that other offers exist, unless you have told it that. When it does not know, it says you will confirm.",
          "A viewing request is captured as a request with preferred days and times. Where your calendar can be connected it can offer times you have opened, and otherwise your team confirms. A valuation request captures the property address, the owner's name and a good time to talk, and it goes to the agent by your routing rules.",
          "Sellers often call from a sign or an ad and want to talk about timing before anything else. The receptionist records what they say about their plans in their own words, keeps it short, and marks the call for you rather than trying to advise."
        ],
        "list": [
          "Name and best callback number",
          "The listing or the kind of home they asked about",
          "Buying, selling or both, and their timing",
          "Preferred viewing days and times",
          "Whether they already work with an agent",
          "For a valuation, the property address and best time to talk"
        ]
      },
      {
        "heading": "Open houses, evenings and busy weekends",
        "paragraphs": [
          "Weekends and open house afternoons are often when you are least able to pick up a phone. The receptionist answers at any hour, so a call at 8 p.m. becomes a summary in front of you instead of a voicemail.",
          "Routing follows your rules: to the listing agent, to a team rotation you agree, or a live transfer where your phone setup supports it. You approve the transfer rules and what happens if nobody answers.",
          "Missed call text back can send an approved text after an unanswered call, with STOP handling. Lead follow-up adds an instant acknowledgement and scheduled follow-up you approve, and it stops when the person replies or you need to step in.",
          "A team can set different rules for different days. For example, calls about one agent's listings go to that agent on weekdays and to the duty agent on Sundays. Write the rules down before launch so every summary reaches a named person."
        ]
      },
      {
        "heading": "What stays with you: valuations, advice and fair housing",
        "paragraphs": [
          "The receptionist gives no valuation, no opinion on price, no negotiation advice, and no legal or financial advice. It does not invent availability. If a listing goes under contract, it only says what you have updated it to say.",
          "It does not steer. It does not describe neighborhoods, schools or the people who live in an area, and it does not recommend or discourage areas. A caller who asks whether a place is a good area hears that the agent will talk it through. Routing rules do not use protected characteristics, and your fair housing obligations are yours, so confirm the rules that apply with your broker or advisor.",
          "Call recording and consent requirements are reviewed during setup. Routing, coverage and fallback are tested with real call scenarios before launch."
        ],
        "list": [
          "Valuations and price opinions",
          "Negotiation and offer strategy",
          "Legal, financial and mortgage advice",
          "Confirming that a listing is available",
          "Describing neighborhoods or the people in them",
          "Any caller who asks for a person"
        ]
      },
      {
        "heading": "Fit with your CRM and calendar, and how to judge whether it works",
        "paragraphs": [
          "Agents commonly use tools such as Follow Up Boss, kvCORE, LionDesk and Google Calendar. LYCORE is not a partner of those companies and does not claim native integrations. Whether a call summary lands in your CRM or reaches you by text or email depends on your tools, and that is checked before a build is agreed.",
          "Agree the measures before launch. Useful ones are calls answered against calls missed, time from a recorded inquiry to your first response, viewing requests captured, and viewings that were confirmed and then held. Report the receptionist's automated acknowledgement separately from your own reply, so the number reflects you.",
          "Outcomes are never guaranteed, and these are proposed measures, not promised results. You can try the Test our AI agent widget, then book a free review for a plain answer on fit, with no pressure and no obligation.",
          "Test the rules with real scenarios before launch: a caller asking about a listing that just went under contract, a caller asking whether a school district is good, and a caller who wants a person. Those three show quickly whether the setup behaves the way you want."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can it tell a caller whether a home is still available?",
        "answer": "Only if you have given it that information for the listing, and it says only what you supplied. Otherwise it says you will confirm. It never invents availability or offers."
      },
      {
        "question": "Can it book a showing?",
        "answer": "It captures the request with preferred days and times. Where your calendar can be connected it can offer times you have opened. Otherwise you or your team confirm the viewing."
      },
      {
        "question": "What does it say if someone asks about the neighborhood or the schools?",
        "answer": "It does not describe areas or the people who live there. It says the agent will talk it through and records the question for you. It also does not recommend or discourage any area."
      },
      {
        "question": "Can it give a home valuation?",
        "answer": "No. It captures the property address and a good time to talk, then creates a request for the agent. The agent does the valuation."
      },
      {
        "question": "How does it decide which agent gets a call on a team?",
        "answer": "By the rules you approve, such as the listing agent or an agreed rotation. Rules do not use protected characteristics. If no rule fits, the call goes to a person you name."
      },
      {
        "question": "Does it work with Follow Up Boss or kvCORE?",
        "answer": "That depends on your setup, and LYCORE does not claim native integrations with either. Summaries can reach you by text or email, and a connection to your CRM is checked before a build is agreed."
      }
    ]
  },
  "/services/ai-receptionist": {
    "sections": [
      {
        "heading": "What an AI answering service does when a call comes in",
        "paragraphs": [
          "An AI answering service picks up the phone in your business name when you cannot. You might be on a roof, under a sink or with a patient in the chair, or it might be nine at night and the office is dark. Here is what the caller experiences, in order.",
          "Every step below is a rule you approved before launch, not something the receptionist decides on its own. If a caller asks for something outside those rules, it says it will pass the request to your team, takes the details and moves on. It does not make up a price, a diagnosis or a promise.",
          "The receptionist works on the number your customers already ring. How calls reach it, for example when you are busy or after a set number of rings, depends on your phone setup and is checked before the build is agreed. Callers do not download anything or press through a menu."
        ],
        "list": [
          "It answers with the greeting you approved and says it is an AI assistant acting for your business",
          "It listens to why the caller is ringing and gives the answers you have approved, such as your service area or opening hours",
          "It asks your intake questions one at a time and reads the phone number and address back to confirm them",
          "It follows your rule for that kind of call: book the job, put the caller through to a person, or take a message",
          "It tells the caller plainly what happens next",
          "It sends you a summary so you know who called and what needs doing"
        ]
      },
      {
        "heading": "How the receptionist sounds, and how callers are told it is an AI",
        "paragraphs": [
          "The greeting names your business and says the caller has reached an AI assistant. LYCORE does not present the receptionist as a person. A caller who wants a human can ask for one at any point, and the receptionist follows your transfer or callback rule instead of arguing.",
          "The aim is a calm front desk: short sentences, one question at a time, no script read at speed. You can hear how it sounds before you decide anything, because the site has a Test our AI agent voice widget. During setup we test your own version with call scenarios from your trade, and you judge whether it is good enough for your callers.",
          "Some callers will still hang up when they hear it is an AI. That is a real cost, and it is one reason to measure results instead of assuming them. A call about a burst pipe and a call about a quote for next month are different, and your rules can treat them differently.",
          "It also helps to decide what the receptionist does with silence. Some callers hang up before saying a word, and some ring only to check whether you are open. Your rules can cover both, for example by giving your hours and offering a callback."
        ]
      },
      {
        "heading": "What the receptionist captures on every call",
        "paragraphs": [
          "A missed call is worth little if you do not know who made it. Every call ends with the same core record, so your team can act without ringing the customer back to ask the questions again.",
          "You choose the intake questions. A plumber might want to know whether water is running right now. A dental office might want only a name, a number and whether the caller is an existing patient, with anything clinical going to staff. Keep the list short, because every extra question is another chance for the caller to give up.",
          "Wrong numbers, sales calls and vendor calls are answered too, and handled by the rules you set. They do not pull you off the job, and they do not get a slot in your day.",
          "Accuracy matters more than volume. Reading the number and address back to the caller catches the wrong digit that would otherwise cost you a wasted trip or a callback to nobody. That small habit is worth more than a long list of questions."
        ],
        "list": [
          "The caller's name",
          "The best callback number, confirmed back to the caller",
          "The service address, where the job needs one",
          "The reason for the call, in the caller's own words",
          "The answers to your intake questions, such as the type of problem or how urgent it feels",
          "What the receptionist said or did on the call"
        ]
      },
      {
        "heading": "Urgent calls, and what happens when it cannot answer or nobody picks up",
        "paragraphs": [
          "You tell the receptionist what counts as urgent in your business: water coming through a ceiling, no heat in winter, a customer locked out, a backed-up drain. It asks the questions that separate those calls from routine ones, and when a call meets your rule it takes the urgent path instead of the normal one. That path is yours to choose: a live transfer, an immediate alert to you, or a message marked urgent.",
          "Live transfer is included where the phone setup supports it. You approve the transfer rules and what happens if nobody answers the transfer. For example: try you, then a second person, then take a message and tell the caller when to expect a callback.",
          "When the receptionist cannot answer a question reliably, it does not guess. It says it will pass the question to your team, captures the details and hands it over. LYCORE is not an emergency dispatch service and the receptionist does not replace 911. Your rules can tell it to advise anyone describing danger to life to call 911 first.",
          "Urgent means different things in different trades. A plumber's rule might be water running now, an HVAC company's might be no heat in winter, and a locksmith's might be a person locked out at night. The receptionist asks the questions you wrote and takes the path you chose. It does not decide on its own what counts as an emergency."
        ]
      },
      {
        "heading": "AI receptionist versus voicemail, a human answering service and a shared receptionist",
        "paragraphs": [
          "Voicemail waits for the caller to do the work. Invoca, a call analytics company, reports that fewer than 3% of callers sent to voicemail leave a message. The receptionist talks to the caller while they are still on the line and still willing to give you their details.",
          "A human answering service puts a trained person on the phone, which is the better choice when a caller needs warmth or unusual judgment. Both work from rules you give them.",
          "The difference is that the receptionist behaves the same on the 3 a.m. call as on the 3 p.m. one, and it has no shift change.",
          "A shared receptionist answers for several businesses and greets each in its name. That suits an office where most calls need a human read. You can also mix them: keep a person for daytime and use the receptionist for after hours, lunch and the moments when the line is busy."
        ]
      },
      {
        "heading": "What you receive, and how setup and testing work",
        "paragraphs": [
          "After each call you get a summary: who called, the number, the address, the reason, what the receptionist did and what it needs from you. Where your calendar or booking tool can be connected, the receptionist can offer times and record the booking. Where it cannot, it captures a booking or callback request for your team to confirm. What can be connected is checked before the build is agreed.",
          "Setup starts with your rules written down: the greeting, the intake questions, what counts as urgent, the transfer numbers and what the receptionist must never do. Then it is built and tested with real call scenarios before launch: an emergency at night, a wrong number, a caller who wants a person, a transfer nobody answers. Routing, coverage and fallback are all tested, and call recording and consent requirements are reviewed during setup.",
          "How calls reach the receptionist depends on your phone setup, and that is checked before the build is agreed. After launch, read the first week of summaries yourself and change the wording where a call went sideways.",
          "The rules stay yours. If a call goes badly, you say so, and the wording or the rule changes. The receptionist is a set of decisions you made in advance, and you can revise any of them."
        ]
      },
      {
        "heading": "How to measure it, and who it is not right for",
        "paragraphs": [
          "Before launch, write down how many calls you miss and when. Then look at four numbers each month: calls answered against calls missed, calls that ended in a booking or a callback request, how long a real inquiry waits before a person responds, and how many calls were handed over to you. Read a sample of the summaries too, because a number cannot tell you whether a call sounded right.",
          "ServiceTitan's 2022 call data found smaller shops booked about 26% of calls at peak times and about 9% after 6 p.m. That is industry data, not a promise of what you will book.",
          "It is not the right fit if your callers insist on speaking to you or to one particular person, if most of your calls need professional judgment, or if you rarely miss calls at all. It does not give legal, medical, dental or financial advice. For law firms, dental offices and med spas it handles non-clinical calls, and your staff decide whether to take a case or answer a clinical question.",
          "If that sounds like your business, say so on the free review. It looks at how your calls are handled today, with no pressure and no obligation."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What does an AI receptionist sound like on the phone?",
        "answer": "It sounds like a calm front desk: short sentences, one question at a time, and your business name in the greeting. It says it is an AI assistant, so nobody is fooled. You can hear it yourself with the Test our AI agent voice widget on the site, and your own version is tested with call scenarios from your trade before launch."
      },
      {
        "question": "What if the caller is upset or asks for a real person?",
        "answer": "The receptionist follows your rule for that case. Depending on your phone setup and your rules, that means a live transfer to you or a colleague, or a callback with the caller's details captured. It does not argue with someone who asks for a human, and it does not try to talk a frustrated caller round."
      },
      {
        "question": "How does the receptionist handle emergencies?",
        "answer": "You define what counts as urgent for your business and what should happen: a live transfer, an immediate alert or a message marked urgent. LYCORE is not an emergency dispatch service and does not replace 911. Your rules can tell the receptionist to advise callers who describe danger to life to call 911 first."
      },
      {
        "question": "What if nobody picks up the transfer?",
        "answer": "You approve that path in advance. A common pattern is to try you, then a second person, then take a message and tell the caller when to expect a callback. That path is tested with real call scenarios before launch, so you see it work before a customer does."
      },
      {
        "question": "What do I get after each call?",
        "answer": "A summary with the caller's name, number, address, reason for calling, what the receptionist did and what it needs from you. Where your calendar or booking tool can be connected, a booking is recorded. Otherwise you get a callback request to confirm. Who receives the summary and how quickly is agreed in setup."
      },
      {
        "question": "How long does setup take, and what do I need to do?",
        "answer": "You need to decide your greeting, your intake questions, what counts as urgent and where transfers should go. LYCORE builds the receptionist around those rules, checks how calls will reach it on your phone setup, and tests with real call scenarios before launch. The timing depends on your phone setup and how many rules you want, so it is agreed on the call rather than promised in advance."
      },
      {
        "question": "Are calls recorded?",
        "answer": "Call recording and consent requirements are reviewed during setup, because the rules depend on your state and on the callers you serve. Confirm the requirements for your own business with your advisor, and decide with LYCORE what, if anything, is recorded before launch."
      }
    ]
  },
  "/services/missed-call-text-back": {
    "sections": [
      {
        "heading": "What a missed call text back service does in the minute after a missed call",
        "paragraphs": [
          "A missed call text back service watches for calls that go unanswered and sends the caller a text from your business right away. The caller has just hung up, is still holding the phone and is probably about to try the next name on the list. The text gets in front of that decision.",
          "The whole sequence takes a few seconds and needs nothing from you in the moment. Your part is done beforehand: you approve the wording, the rules for which calls trigger it and who receives the replies.",
          "The caller does not need to do anything special. There is no app to download and no form to fill in. They see a text from your business and answer it like any other message."
        ],
        "list": [
          "A call comes in and nobody answers",
          "An approved text goes to the caller from your business",
          "The caller replies with what they need",
          "The reply is captured with their details and sent to you or your team",
          "A person picks up the conversation, and the automatic messages stop"
        ]
      },
      {
        "heading": "What the text should say",
        "paragraphs": [
          "Keep it short and put a question in it. A message that only apologizes gives the caller nothing to answer, and a message that asks what they need gives them a reason to reply. Say who you are, say you missed the call and ask one thing.",
          "Here is the shape, with your own details in place of the brackets: 'Hi, this is [business name]. Sorry we missed your call. What do you need help with, and what is the address? Reply STOP to opt out.' You approve the final wording, so it sounds like your business and not like a template.",
          "Write it so it does not pretend to be you typing on the roof. A plain message from the business is more believable than a fake personal one, and it avoids surprises when a person takes over the thread later.",
          "Avoid anything that promises what your team cannot do. 'We will call you back in five minutes' is a bad line if the truck is on its way to another job. 'We will get back to you today' is better, if it is true."
        ]
      },
      {
        "heading": "Which calls should trigger the text",
        "paragraphs": [
          "You do not have to text every missed call. Common rules are calls unanswered after a set number of rings, calls that arrive after hours, or calls that arrive while the line is busy. Which rules fit depends on how you and your team actually take calls, and they are agreed during setup.",
          "Think about the numbers you would not want texted: your own staff, your suppliers, a regular customer who always emails. It also helps to decide what should happen with a caller who rings three times in ten minutes. One text is useful, and three are an annoyance.",
          "After hours is worth its own rule. The text can say when someone will reply, which is more honest than pretending a person is at a desk. Approve only what your team can actually deliver."
        ]
      },
      {
        "heading": "What happens when the caller replies",
        "paragraphs": [
          "Replies are routed to you or the person you name, with the caller's details attached, so the conversation continues with a human. The automatic messages stop when a person needs to take over. That handoff is the part that decides whether the service pays for itself.",
          "A text is only as good as the speed of the answer. If a reply sits unread until the next morning, the caller has moved on. Decide before launch who watches replies during working hours, and what happens to replies that come in at night.",
          "Replies also tell you something. A caller who answers with a job and an address is a real inquiry. A caller who never replies may have been a wrong number or a sales call, and that is worth knowing when you look at your numbers."
        ]
      },
      {
        "heading": "Consent, opt-outs and what to check with your advisor",
        "paragraphs": [
          "Text messages come with rules about wording, consent and opt-outs, and the requirements differ by carrier and situation. Every message includes STOP handling, and anyone who opts out is not messaged again. LYCORE reviews consent requirements during setup.",
          "LYCORE is not your lawyer. Confirm the rules for your own business and your own states with your advisor before you turn the service on.",
          "Ask your advisor whether you need to keep records of consent and how to treat numbers collected for another purpose. Those are questions for a professional, not for a vendor. The setup should leave you with a clear, documented message and opt-out flow that you can point to."
        ]
      },
      {
        "heading": "Where a text works and where it does not",
        "paragraphs": [
          "A text reaches mobile phones. It cannot be delivered to a landline, so a caller ringing from one will not see it. Someone with a flooded kitchen may also prefer a call back to typing, so offer a way to ask for one.",
          "A text does not replace answering the call. It works well alongside an AI receptionist, which picks up the call itself, and the text back covers whatever still goes unanswered. It also cannot fix a business where nobody reads the replies.",
          "It helps to picture the caller. Someone ringing at 6 p.m. with a dead water heater will read a text within seconds. Someone asking about a quote for next month may reply tomorrow, and that is fine too."
        ]
      },
      {
        "heading": "How to tell whether it is working",
        "paragraphs": [
          "Count the calls that went unanswered, the texts that were sent, the replies you received and the replies that became a booking or a callback. Keep those four numbers separate, because a sent text is not a customer. Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered, which gives you a reason to check your own figure first.",
          "Compare a few weeks before and a few weeks after, and note when a call was a wrong number or a sales call. Outcomes are never guaranteed. The point is to see what happens to your own missed calls.",
          "Read the actual replies, not only the counts. Look for customers who asked something the text did not anticipate, and change the wording. Adjust it weekly at first, then leave it alone once it works."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How fast does the text go out?",
        "answer": "It is sent right after a call goes unanswered. What counts as unanswered, such as a number of rings or a busy line, is agreed during setup, and the exact timing depends on your phone system. It is tested from a real phone before launch."
      },
      {
        "question": "Can it send texts only after hours or only when I am busy?",
        "answer": "Yes. You choose which calls trigger the text: every unanswered call, after hours only, or calls that arrive while the line is busy. You can also name numbers that should never be texted, such as your own team."
      },
      {
        "question": "What if the caller texts STOP?",
        "answer": "They are opted out and are not messaged again. STOP handling is built into the setup, and the opt-out is respected across the messages LYCORE sends for you."
      },
      {
        "question": "Will it text a caller who phoned from a landline?",
        "answer": "No, a text cannot be delivered to a landline. Those callers are one reason a missed call text back works best alongside a receptionist that answers the call itself, or a voicemail greeting that gives another way to reach you."
      },
      {
        "question": "Do I need a new phone number for this?",
        "answer": "It depends on your phone setup and carrier. How the text is sent and what number the caller sees is checked before the build is agreed, so you know the answer before you commit."
      },
      {
        "question": "What about wrong numbers and sales calls?",
        "answer": "A text back cannot always tell a customer from a wrong number. Rules such as time of day and known numbers reduce the noise, and replies from people who are not customers are simply not acted on. If you want calls screened first, that is what the receptionist is for."
      },
      {
        "question": "Should I use this for emergency calls?",
        "answer": "Use it as a first step, not as the whole plan. A caller with an urgent problem may not want to type, so offer a callback, and pair the service with a receptionist and clear escalation rules. LYCORE is not an emergency dispatch service and does not replace 911."
      }
    ]
  },
  "/services/lead-follow-up": {
    "sections": [
      {
        "heading": "Where inquiries actually go quiet",
        "paragraphs": [
          "Most lost inquiries are not a no. They are a form that sat unread until the next morning, an estimate nobody chased, a customer who said they would think about it and never heard from you again. Nobody decided to drop them. The day just filled up.",
          "Lead follow-up automation is a set of rules that covers those gaps so the work does not depend on your memory. It replies to new inquiries, follows up on the ones that go quiet and hands the conversation to a person when it matters.",
          "It is the same story in every trade. A plumber gets a form request while on a job, a med spa gets a message after hours, and a roofer gets a call from a homeowner comparing quotes. In each case a quick, clear reply gives you a better chance, and speed is hard to keep up by hand."
        ]
      },
      {
        "heading": "The first reply: acknowledge every new inquiry straight away",
        "paragraphs": [
          "An inquiry can arrive by call, form or message. The first job is to tell the person that you have it. A short acknowledgement that names your business, confirms what they asked for and says what happens next is enough to keep them from shopping around.",
          "You approve the wording, and it should say only what is true. If someone will call back within the working day, say that. Do not promise a time nobody can keep.",
          "For phone inquiries, the receptionist does the first response itself, and follow-up can start from its summary. For forms and messages, the acknowledgement goes out on its own. The tone should match your business: warm, short and from your name."
        ],
        "list": [
          "Who you are and that you received the request",
          "What you understood they need",
          "What happens next and roughly when",
          "How to reach a person right now",
          "An opt-out for further messages"
        ]
      },
      {
        "heading": "Following up on estimates and appointment requests",
        "paragraphs": [
          "The biggest gap is after the estimate. The customer got a number, said they would think about it, and now you are waiting. A follow-up on a schedule you approve keeps you in the conversation without a reminder note on your desk.",
          "A sensible schedule is short. One check after a day or two, one a few days later, then stop. More than that starts to look like pressure. You decide the number, the timing and the channels.",
          "Keep each message useful. A follow-up that only says 'just checking in' gives the customer nothing to answer. Offer to walk through the estimate, answer a question or hold a slot in the schedule, and stop when the customer says they went with someone else."
        ]
      },
      {
        "heading": "When the automation stops and a person steps in",
        "paragraphs": [
          "The automatic messages stop when the customer replies, and they stop when a person needs to step in. A reply that asks a question, a customer who wants to change the job or a message that sounds unhappy should reach a human, not another scheduled text.",
          "When that happens a task is created for you or your team, so the next step has an owner. Without that owner, automation only makes the silence more polite.",
          "Decide before launch how a person can pause a customer's follow-up after speaking with them in person. Otherwise the customer gets a text about an estimate you have just discussed, and it looks like nobody is paying attention."
        ]
      },
      {
        "heading": "Quiet hours, opt-outs and tone",
        "paragraphs": [
          "Follow-up messages respect the quiet hours you set and stop when someone opts out. Sensitive details stay out of routine texts and emails. Wording is yours to approve, and it should sound like the person who would have written it if they had the time.",
          "Consent requirements for texting and email are reviewed during setup. The owner should confirm the rules with their own advisor, because the requirements can differ by channel and situation.",
          "Tone matters as much as timing. A follow-up that reads like a form letter gets ignored, and one that reads like a pushy salesperson gets blocked. Write each message as though you were sending it yourself between jobs."
        ]
      },
      {
        "heading": "What you can see afterwards",
        "paragraphs": [
          "You should be able to look at any inquiry and tell what happened to it: when it arrived, when the first reply went out, whether follow-up ran, whether the customer answered and who owns it now. If you cannot see that, you cannot fix it.",
          "Three numbers are worth watching: how long a new inquiry waits for a first reply, how many inquiries turn into a booked appointment, and how many are still waiting for a next step and for how long. Agree how each is counted before you compare periods.",
          "A weekly look is enough for most owners. Open the list of inquiries still waiting for a next step, oldest first, and clear it. That one habit does more than any dashboard."
        ]
      },
      {
        "heading": "What follow-up cannot fix",
        "paragraphs": [
          "It cannot fix a slow quote, a price that is out of line or a schedule that is booked for six weeks. It cannot bring back a customer who has already decided. It also does not answer the phone, which is what the AI receptionist and the missed call text back are for.",
          "It works best as the third piece: the receptionist answers, the text back catches what is missed, and follow-up keeps every inquiry moving until somebody decides. Outcomes are never guaranteed.",
          "If your volume is small enough to manage in your head and you rarely lose an inquiry to silence, you may not need this. The free review will say so plainly."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What counts as a lead for follow-up?",
        "answer": "Any new inquiry you want to respond to: a phone call the receptionist took, a web form, a message or a request for an estimate. Which sources are connected depends on your tools and is checked before the build is agreed."
      },
      {
        "question": "How quickly does the first reply go out?",
        "answer": "As soon as the inquiry is received, subject to your quiet hours. An inquiry that arrives at night can get an acknowledgement that says when a person will reply, and the timing rules are agreed during setup."
      },
      {
        "question": "How many follow-up messages will a customer get?",
        "answer": "You decide. A short schedule is usually better than a long one: a couple of follow-ups after an estimate, then stop. Any reply, cancellation or opt-out stops or changes the sequence."
      },
      {
        "question": "What happens if the customer replies at night?",
        "answer": "The automatic follow-up stops and the reply is recorded with a task for you or your team. Whether a person answers overnight or first thing the next morning is your rule, and the customer should be told which one to expect."
      },
      {
        "question": "Can I see what was sent to each customer?",
        "answer": "You should be able to see the messages, the timing and the status of each inquiry. What that view looks like depends on the tools connected, and it is checked before the build is agreed."
      },
      {
        "question": "Can I use it for customers who already said no?",
        "answer": "Not as a way to keep pushing. A customer who declines or opts out should not be messaged again. Reactivation of past customers is a separate workflow with its own consent and suppression rules."
      }
    ]
  },
  "/services/google-business-profile-management": {
    "sections": [
      {
        "heading": "What Google Business Profile management covers",
        "paragraphs": [
          "Google Business Profile management means someone keeps the listing that appears on Google Search and Maps for your business accurate and up to date. Google Business Profile optimization service is the same idea with a bigger word: fix what is wrong, fill in what is missing and keep it current. Neither one makes the phone ring by itself.",
          "The reason to care is that many local searches end on the profile and never reach your website. A customer with a leak looks at the map, sees a number and calls. If that number, those hours or that service area are wrong, the call goes somewhere else.",
          "Management is ongoing, not a one-off tidy-up. Hours change at holidays, phone systems change, and a service you added last spring may never have reached the profile. Someone needs to notice."
        ]
      },
      {
        "heading": "The details that decide a call",
        "paragraphs": [
          "A short list of fields does most of the work. LYCORE checks each one against how your business actually runs today and corrects what is out of date.",
          "The phone number matters most, and it should be the number that gets answered. If your calls go to a receptionist or a text back, the profile should point at the line that carries them.",
          "Hours deserve extra care. Holiday hours are the ones most often left wrong, and they are the days customers are most likely to need you. If a receptionist answers after hours, say what a caller can expect so nobody expects a technician at the door."
        ],
        "list": [
          "Phone number, checked against the number on your website",
          "Business hours, including holiday and after-hours notes",
          "Primary and additional categories that describe what you really do",
          "Service area, matching where you really work",
          "The website link and the booking or contact path"
        ]
      },
      {
        "heading": "Making the profile match your website and other listings",
        "paragraphs": [
          "Customers and search engines both compare your details across places. When your profile says one thing, your website another and a directory a third, people lose trust and Google has less reason to. A large part of the work is making these agree.",
          "LYCORE checks the profile against your website and the other listings that show your business, lists the differences and corrects the ones within its reach. Some directories need the owner to approve a change, and some take time to update.",
          "The business name matters too. It should match the name on your sign and your website, without extra keywords added. Stuffing keywords into a business name can break Google's guidelines and put the profile at risk."
        ]
      },
      {
        "heading": "Services, photos, posts and questions",
        "paragraphs": [
          "Beyond the basics, a profile that looks alive earns more trust. That means services listed in plain words, real photos of your work and your team, regular posts and answers to the questions customers keep asking.",
          "Photos should be yours. A picture of a real van, a real crew and a finished job says more than a stock image, and a customer can tell the difference.",
          "Questions and answers are underused. If customers keep asking whether you take weekend calls or work in a certain area, answer once on the profile in your own words and save yourself the phone call."
        ]
      },
      {
        "heading": "How access works: you stay the owner",
        "paragraphs": [
          "You add LYCORE as a manager on your Google Business Profile. You remain the owner, and you can remove that access at any time. LYCORE never asks for your Google password.",
          "If you do not yet have a verified profile, or someone else set it up years ago and you cannot find who, sort that out first. Ownership problems are common and take longer than any edit.",
          "Keep a short list of who has access, and review it whenever someone leaves your business. Managers can be added and removed. Your access for LYCORE can be removed by you at any time."
        ],
        "list": [
          "You add LYCORE as a manager",
          "You stay the owner",
          "LYCORE never asks for your password",
          "You can remove access at any time"
        ]
      },
      {
        "heading": "What management cannot do",
        "paragraphs": [
          "It cannot promise a ranking on Google Maps. Placement depends on many factors, including competition, distance and the profile's history, and nobody outside Google controls it. Accurate, complete and active information helps customers judge you and reach you, and that is the claim worth making.",
          "It also cannot delete an honest bad review or force Google to merge a duplicate listing or lift a suspension. Those decisions belong to Google. Reviews are their own workflow, covered under reputation management.",
          "What management can do is cut the avoidable losses: wrong numbers, old hours and missing service areas. Those are within reach, and they decide whether a ready customer can contact you."
        ]
      },
      {
        "heading": "How to measure profile results",
        "paragraphs": [
          "The profile reports calls, website clicks and direction requests. Keep them separate, because a click is not a booking. Compare equivalent periods and check whether the calls that came from the profile were answered.",
          "The last check matters most. If profile calls go to a phone nobody answers on a job, better information only sends more people to voicemail. That is why the profile, the phone and the website should be reviewed together.",
          "Set a baseline before any changes: a few weeks of calls, website clicks and direction requests from the profile. After the changes, look at the same measures for an equivalent period and note holidays and season. Small numbers move around, so do not read too much into a single month."
        ],
        "list": [
          "Calls from the profile",
          "Website clicks",
          "Direction requests",
          "Whether the calls were answered"
        ]
      }
    ],
    "faqs": [
      {
        "question": "What does the work actually change on my profile?",
        "answer": "Phone number, hours, categories, service area and the links, corrected so they match your website and other listings. Photos, posts and answers to customer questions can be added or kept current. The details are agreed with you, and you approve anything that changes how customers reach you."
      },
      {
        "question": "What do I need to give you to get started?",
        "answer": "The name of the profile, the correct phone number and hours, the services and area you really cover, and permission to be added as a manager. You add LYCORE as a manager, and you stay the owner. No passwords are shared."
      },
      {
        "question": "What if I have a duplicate or wrong listing for my business?",
        "answer": "Duplicates are worth raising, but Google decides what gets merged or removed and neither you nor LYCORE can force it. The work starts by finding the duplicates and making sure the main profile is correct."
      },
      {
        "question": "I work out of my home or travel to customers. Should my address show?",
        "answer": "That is a choice for your business and Google's rules. Many service businesses use a service area instead of a public address. It is worth deciding before the profile is edited, and it is one of the questions covered at the start."
      },
      {
        "question": "Can you remove a bad review?",
        "answer": "No. Honest reviews cannot be removed, and reviews that break Google's policies are reviewed by Google, not by LYCORE. What helps is a consistent process for asking every customer for a review and for replying to the ones you get."
      },
      {
        "question": "Is this different from getting more reviews?",
        "answer": "Yes. Profile management keeps your details correct and complete. Reviews are a separate workflow, with their own rules about asking every customer and not filtering by sentiment."
      }
    ]
  },
  "/services/web-design": {
    "sections": [
      {
        "heading": "What a website for plumbers and other contractors has to do in five seconds",
        "paragraphs": [
          "A visitor who lands on a contractor's site is usually looking for three things: what you do, whether you work where they live and how to reach you now. Most of them are on a phone, and many are standing in the problem. If those answers are not on the first screen, they go back to the search results.",
          "Web design for contractors is mostly about removing the delay between that first look and the call. Everything else on the site supports the moment when someone taps your number.",
          "You can test this in ten seconds. Open your site on your phone using mobile data and ask someone who does not know your business to find the number and say what you do. If they hesitate, your customers will too."
        ]
      },
      {
        "heading": "Phone-first: the number and the tap",
        "paragraphs": [
          "The phone number should be at the top of every page, and it should be a link that starts a call when tapped. A booking or request button should sit next to it. A visitor should never need to pinch, scroll or hunt for the way to reach you.",
          "The same thought applies to forms. Ask for the few things you need to reply, and nothing else. A twelve-field form on a small screen loses people who would have called.",
          "Think about what happens when someone taps and nobody answers. The call should reach your receptionist, or the missed call text back should go out. A perfect button on top of an unanswered phone is a wasted button."
        ]
      },
      {
        "heading": "The pages a service business needs",
        "paragraphs": [
          "A small number of clear pages is enough: a home page, one page for each main service, a page on where you work, an about page with who you are and how long you have been doing this, and a contact page. Each service page should say what the job involves, what the customer can expect and how to book.",
          "Avoid dozens of near-identical pages for every nearby town. They read as filler to customers and are the kind of thing search engines discount. Write a service area page that is true, and add a town page only where you genuinely work and have something real to say.",
          "Each service page should answer the questions that come before a call: what the job involves, what it does not, how soon you can come and what the customer should have ready. That saves you the first five minutes of the phone call and helps the caller decide."
        ],
        "list": [
          "A home page that says what you do and where",
          "One page for each main service",
          "A page on the area you work in",
          "An about page with who you are",
          "A contact page with a phone number and a short form"
        ]
      },
      {
        "heading": "Proof that is real",
        "paragraphs": [
          "Trust comes from details a customer can check: your license and insurance where they apply, real photos of your work and crew, reviews from real customers and a clear statement of what you do and do not do. LYCORE does not invent testimonials, ratings or results for any site.",
          "If you do not have much proof yet, show what you do have. A few real photos and a plain description of your process beat a wall of empty claims.",
          "Do not copy claims from other sites. 'Licensed, insured and family owned' is worth saying only if it is true and you can show it. A false claim on a website is worse than no claim."
        ]
      },
      {
        "heading": "Speed on a mobile connection",
        "paragraphs": [
          "Visitors leave slow pages, and phone connections in a basement or a driveway are not fast. The site should be light: sized images, few scripts and no heavy video that plays before the number appears.",
          "Speed is worth checking before launch on a real phone, not only on a desktop. If it feels slow in your hand, it is slow for your customers.",
          "Compress photos before uploading them, load video only when the visitor asks for it and remove plugins nobody uses. These are ordinary, unglamorous steps, and they matter more than any design flourish."
        ]
      },
      {
        "heading": "Tracking calls and forms",
        "paragraphs": [
          "Call and form tracking are part of the build. They tell you which pages and sources produce calls and requests, so you stop guessing which part of the site is doing the work.",
          "Track calls as well as clicks. A tap on the number is not a conversation, and the number that matters is how many of those calls were answered.",
          "Agree what gets tracked before launch: taps on the phone number, form submissions and the page each came from. Keep test and internal traffic out of the counts where you can. Then look monthly, not daily."
        ],
        "list": [
          "Taps on the phone number",
          "Form submissions",
          "The page or source each one came from"
        ]
      },
      {
        "heading": "What the site cannot do, and what happens after the tap",
        "paragraphs": [
          "A website cannot guarantee that anyone finds it on Google, and no honest builder will promise a ranking. A clear, fast site with pages that answer real questions gives you a fair chance, and the rest depends on competition and history.",
          "It also cannot answer the phone. A visitor who taps your number at 8 p.m. and reaches voicemail has done everything right and still been lost. That is why a phone-first site pairs well with an AI receptionist and a missed call text back, and why the Google Business Profile should point at the same number.",
          "A site is also never finished. Services change, photos go stale and an hours mistake can sit there for a year. Plan a short review every few months."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How long does a new website take to build?",
        "answer": "It depends on how many pages you need and how quickly you can supply photos, service details and approvals. The timeline is agreed on the call rather than promised in advance, and the free review is a chance to ask what your own site would involve."
      },
      {
        "question": "Do I need to write the content myself?",
        "answer": "No, but you know your trade better than anyone. You supply the facts: services, area, license details and real photos. The wording is written around them and you approve it before anything goes live."
      },
      {
        "question": "Who owns the website and domain?",
        "answer": "Ownership, hosting and access should be agreed before the build starts, so nothing is left to assumption. Ask for those terms before you commit, whoever you hire, and raise it on the free review."
      },
      {
        "question": "Should I have a contact form as well as a phone number?",
        "answer": "Yes. Some visitors will not call, especially in the evening, and a short form gives them a way in. Keep it to the few fields you need to reply, and route it so the request is answered quickly."
      },
      {
        "question": "How many pages does a contractor website need?",
        "answer": "Fewer than most people think. A home page, one page per main service, a service area page, an about page and a contact page cover most service businesses. More pages help only when each has something real to say."
      },
      {
        "question": "Can the site connect to my receptionist or booking tool?",
        "answer": "It can be built around them. Tap-to-call and tap-to-book are part of the design, and whether a booking tool can be connected depends on the tool. That is checked before a build is agreed."
      }
    ]
  },
  "/resources/how-to-stop-missing-calls-small-business": {
    "sections": [
      {
        "heading": "Start with a two-week missed call log, not a purchase",
        "paragraphs": [
          "Your phone already holds the evidence. Pull the call log from your carrier, your business phone app or your call tracking tool for the last two to four weeks and mark every call that went unanswered or ended after a few seconds. Owners tend to remember the one missed call that turned into a complaint and forget the ones that quietly went to another company.",
          "Then sort each miss into a bucket: new customer with a job, existing customer, vendor or supplier, sales call, wrong number, and unknown. Call the unknown numbers back yourself. The split matters because a raw count overstates what you are losing, and the number you care about is missed calls from real customers.",
          "Also write down when each miss happened. Calls missed while you are on a job, calls missed at lunch or while driving, and calls missed after hours or on weekends each need a different fix, so the pattern matters more than the total."
        ],
        "list": [
          "Date and time of the call",
          "Answered, missed or hung up",
          "Type of caller",
          "Whether you called back, and how long it took",
          "What the job was worth if it became one",
          "Whether the caller ended up with someone else, if you learned that"
        ]
      },
      {
        "heading": "Match each pattern to the cover that fits",
        "paragraphs": [
          "If most of your misses come while you are on a job or after hours, a receptionist that answers in your business's name is the closest fit. It says it is an AI assistant, asks the intake questions you approve, captures the name, number, address and reason for the call, and sends you a summary. If your misses are fewer and mostly at lunch or in the truck, a missed call text back plus a set callback window may be enough.",
          "Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered and that fewer than 3% of callers sent to voicemail leave a message. ServiceTitan's 2022 call data found that smaller shops booked about 26% of calls at peak times and about 9% after 6 p.m. Both are industry figures, not measurements of your business, so treat them as a reason to look at your own log rather than a forecast.",
          "If you miss only a handful of calls a month and nearly all of them are regulars who ask for you by name, be honest with yourself. A better voicemail greeting and a habit of calling back the same day may be all you need."
        ],
        "list": [
          "On a job during the day: receptionist answers, or text back plus a callback slot",
          "Lunch and drive time: text back with a callback window",
          "After hours, urgent: receptionist with live transfer rules where your phone setup supports it",
          "After hours, not urgent: receptionist takes the details and books or requests a callback",
          "Wrong numbers and sales calls: leave them out of the count and out of the rules"
        ]
      },
      {
        "heading": "Write down what should happen on each call before anything goes live",
        "paragraphs": [
          "Coverage fails when nobody decided the rules. For each kind of call, decide what the receptionist asks, what counts as urgent, who gets the live transfer, what happens if that person does not pick up, and when it simply takes a message. Keep intake short: name, number, address, the reason for the call, and one or two questions that help you triage, such as whether water is running or whether the system has no heat at all.",
          "Callers can ask for a person at any point, and the receptionist hands over rather than guessing. Decide now who that person is on a Saturday night, and what the receptionist says if nobody answers. Those two decisions do more for the customer's experience than any tweak to the wording.",
          "Then test with real scenarios before launch. Call your own number as an upset customer, as an emergency, as a wrong number, as someone who will not give an address, and as someone who asks for the owner by name. Fix what breaks, and test again."
        ]
      },
      {
        "heading": "Close the loop after the call",
        "paragraphs": [
          "A missed call is only half the problem. The other half is what happens in the hours after it. A text sent to the caller keeps the conversation open, but only if someone reads the reply, so decide who owns replies and what that person does with them on a Sunday.",
          "Do the same for estimates. Plenty of leads go quiet after a quote because nobody followed up, not because the customer said no. A follow-up routine that stops as soon as the customer replies, and that respects quiet hours and opt-outs, covers that without you carrying it in your head.",
          "Set aside ten minutes a week to read the call summaries. You are looking for questions the receptionist could not answer, calls that were routed badly and wording that confused people, and you add each fix to the rules."
        ],
        "list": [
          "Buying cover before looking at your call log",
          "Switching on every tool at once, so you cannot tell what helped",
          "Forgetting to tell your crew and office that calls now arrive as summaries",
          "Letting text replies pile up in a phone nobody checks",
          "Judging results after a few days instead of a few weeks"
        ]
      },
      {
        "heading": "What this will not fix",
        "paragraphs": [
          "Nothing here guarantees more booked jobs, and outcomes are never guaranteed. If the real problem is price, reviews or a full schedule, answering calls faster will not solve it. If your callers only ever want you personally, cover will help less than you hope.",
          "If you want a second opinion on your own call pattern, LYCORE offers a free review. You get a plain answer with no pressure and no obligation, and no long-term contract is required if you go ahead."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How many missed calls is too many?",
        "answer": "There is no fixed number. It depends on how many of the missed calls are real customers and what a new customer is worth to you. Run the missed call calculator with cautious inputs: if the result is small next to the cost of cover, you can live with the gap, and if it is not, you have found your reason to act."
      },
      {
        "question": "Can I just forward my business line to my cell phone?",
        "answer": "It helps, and it costs nothing to try. It fails when you cannot answer anyway, such as on a ladder, under a sink or at night. Forwarding also puts every call on you personally, including sales calls and wrong numbers, so many owners end up ignoring the phone."
      },
      {
        "question": "Does changing my voicemail greeting help?",
        "answer": "A little, if it tells callers when you will call back and offers a text option. Invoca reports that fewer than 3% of callers sent to voicemail leave a message, so most people will hang up whatever the greeting says."
      },
      {
        "question": "How fast should I return a missed call?",
        "answer": "As fast as you can. People with an urgent problem often ring more than one company, so a quick reply keeps you in the running. A text sent right after the missed call can hold your place until you are free to phone."
      },
      {
        "question": "Will callers mind talking to an AI receptionist?",
        "answer": "Some will, which is why the receptionist always says it is an AI assistant and lets callers ask for a person. You can hear how it sounds by using the Test our AI agent widget on the LYCORE site before you decide anything."
      }
    ]
  },
  "/resources/missed-call-text-back-for-home-services": {
    "sections": [
      {
        "heading": "What a missed call looks like in each trade",
        "paragraphs": [
          "A plumber's missed call might be a burst pipe, a water heater that has stopped working, or a quote for a bathroom remodel. An HVAC company's might be no heat, no cooling, a tune-up or an install estimate. A roofer's might be a leak that started an hour ago or a homeowner planning to replace the roof next spring.",
          "Those callers want different things, and the text should let them say which. The person with water on the floor wants a voice quickly, while the person asking about a remodel is happy to reply by text when it suits them. If you send the same message to both, one of them will feel ignored.",
          "That is why a missed call text back works best as one part of a small call plan, not as a standalone fix. It buys you time and keeps the caller with you, but it does not answer the phone."
        ]
      },
      {
        "heading": "Writing the text: what to say and what to leave out",
        "paragraphs": [
          "A good text does four things in a few short lines: says who you are, admits you missed the call, asks one question, and tells the person how to reach a human. Here is a wording you could adapt: 'Hi, this is [your business]. Sorry we missed your call, we are on a job. What do you need help with, and what is the address? Reply STOP to opt out.' Put it in your own voice, because a text that sounds like you gets more replies than one that sounds like a form.",
          "Consider a second wording for after hours that says when you will be back, and a note for callers who have an emergency. For example: 'If this is an emergency, reply EMERGENCY and we will call you as soon as we can.' Only offer that if you have decided who reads those replies and how they are reached at night, because you are making a promise on behalf of your business.",
          "Keep it short and leave selling out of it. The caller has a problem, not a need for your services page."
        ],
        "list": [
          "Long messages with several questions",
          "A sales pitch or a coupon in the first text",
          "Prices, because you have not seen the job yet",
          "A promised arrival time you may not meet",
          "No opt-out wording",
          "A link with no reply option"
        ]
      },
      {
        "heading": "Who reads the reply, and how fast",
        "paragraphs": [
          "The text is the easy half. The reply is where the customer is decided, so name a person for it. Replies can route to you, to the office or to whoever is on call, and you should write down which one at what hour.",
          "Decide what a good reply looks like too. A short human answer such as 'Thanks, we can be there tomorrow morning, does that work?' beats a paragraph. If a reply needs a call, call. If you take days to answer a text you sent in minutes, the caller will notice the gap.",
          "Also decide what happens to replies that arrive overnight. If nobody is on call, make sure the first text says when you will reply, so the customer is not left guessing."
        ]
      },
      {
        "heading": "Pair it with a receptionist for the calls that need a voice",
        "paragraphs": [
          "A text is asynchronous. It works well for the caller who can wait an hour, and poorly for the one standing in a flooded basement. For those calls a receptionist that answers in your business's name, says it is an AI assistant, asks the intake questions you approve and follows your transfer rules is a better first response, with the text as a backup for anything that still goes unanswered.",
          "Live transfer is included where your phone setup supports it. You approve the rules for when it transfers and what happens if nobody picks up.",
          "Also decide which numbers should never trigger a text: your crew, your suppliers, your family and your own office line. Consent requirements are reviewed during setup, and you should confirm the rules with your own advisor before you switch anything on."
        ]
      },
      {
        "heading": "Test it and check it weekly",
        "paragraphs": [
          "Before it goes live, call your business number from a phone you do not use for work, let it ring out and see what arrives. Reply to the text, try STOP, and check that the reply reaches the right person. Repeat after hours.",
          "Once it is live, read the replies once a week for the first month. You are looking for people who did not understand the question, replies that sat unanswered, and messages that went to numbers that were never customers."
        ],
        "list": [
          "Text arrives after an unanswered call",
          "STOP works and is respected",
          "Reply reaches the person you named",
          "After-hours wording is correct",
          "Team and crew numbers are excluded",
          "You know who follows up on Monday"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Should the text go out after every missed call?",
        "answer": "Not necessarily. Decide which calls should trigger it, such as calls unanswered after a set number of rings or after hours, and exclude numbers that are not customers. A rule that fires on every call can text your own crew and suppliers."
      },
      {
        "question": "Can I put a price in the text?",
        "answer": "It is better not to. You have not seen the job, and a number in a text can become an argument later. Ask what the person needs and give a price once you know."
      },
      {
        "question": "What if the caller has a landline?",
        "answer": "A text cannot reach a landline, so that caller will not receive it. This is one reason a text is a backup and not a replacement for answering the call."
      },
      {
        "question": "Do I need to tell customers I will text them?",
        "answer": "Consent and disclosure rules apply to business texting and they vary. LYCORE reviews consent requirements during setup, and you should confirm the rules with your own advisor."
      },
      {
        "question": "What if an emergency caller does not want a text?",
        "answer": "Offer a call back in the message, and pair the text with a receptionist that can answer by voice. Text back should sit behind a real answer for urgent calls, not stand in for one."
      }
    ]
  },
  "/resources/is-an-ai-receptionist-worth-it": {
    "sections": [
      {
        "heading": "Run the worth-it test with your own numbers",
        "paragraphs": [
          "Start with four figures, all yours. Write down the calls you miss in a typical week (M), the share of those that are real customers with a job (R), the share of those you could realistically win if someone answered or replied quickly (W), and what one new customer is worth to you (V). Multiply them together and you have a weekly figure for the opportunity. Multiply by 52 and divide by 12 for a monthly one.",
          "Put that monthly figure next to the quote you get from any provider. If the quote is a small fraction of the opportunity even with cautious inputs, a trial is reasonable. If the two are close, or you had to stretch a number to make it work, the honest answer is that it may not pay for itself yet.",
          "Be careful with V. The first job is the safe number. If your customers usually come back or send others your way, you can add that in a second run, but keep the cautious version as the one you plan around. The missed call calculator on this site does the multiplication for you."
        ],
        "list": [
          "M: missed calls in a typical week, from your call log",
          "R: share that are real customers, not wrong numbers or sales calls",
          "W: share you could realistically win",
          "V: what one new customer is worth to you",
          "Weekly opportunity: M times R times W times V"
        ]
      },
      {
        "heading": "Signs it fits, and signs it does not",
        "paragraphs": [
          "A receptionist tends to fit when you are on jobs during the day, when calls after hours are real work rather than noise, and when callers are mostly strangers with a problem that needs a fast answer. It also fits when the same questions come up all day: do you cover my area, do you do this kind of work, can someone come today.",
          "It fits less well when you miss very few calls, when callers insist on one particular person, or when the value of the call lies in a long consultative conversation. In regulated fields the receptionist handles non-clinical and non-legal calls only. For a law firm it gives no legal advice and does not decide whether a case is taken, and for dental and med spa businesses it does not answer clinical questions. Those go to your staff."
        ],
        "list": [
          "Fits: you are unreachable for part of most working days",
          "Fits: you get real calls after hours or on weekends",
          "Fits: callers are new and ringing several companies",
          "Fits: your calls follow a pattern you can write down",
          "Does not fit: you rarely miss a call",
          "Does not fit: callers ask for one named person"
        ]
      },
      {
        "heading": "Questions to put to any provider",
        "paragraphs": [
          "Ask what the receptionist does when it cannot answer a question, and ask to hear it. A good answer is that it says so, offers to take a message or transfer the call, and does not guess. Ask how it introduces itself to callers; the answer should be that it says it is an AI assistant acting for your business, and that callers can ask for a person.",
          "Ask about the money in plain terms: how it is billed, what counts toward any limit, what happens above that limit, whether there is a setup charge, how long the contract runs and how you cancel. LYCORE quotes on a call after a free review and does not require a long-term contract, and you should expect any provider to answer these questions just as directly.",
          "Finally, ask how the setup is tested. Routing, coverage and fallback should be tried with real call scenarios before launch, not after your first missed emergency."
        ]
      },
      {
        "heading": "What a fair trial looks like",
        "paragraphs": [
          "Decide how you will judge it before it starts. Keep your baseline call log, then compare the same measures once the receptionist is live: calls answered, summaries received, callbacks requested, bookings made and jobs won. Read the summaries yourself instead of relying on a dashboard.",
          "Give it long enough to see a normal spread of calls, including a weekend, and change one thing at a time. If a call went badly, treat it as a rule to fix, not proof that the whole idea works or fails."
        ],
        "list": [
          "Keep the call log from before as your baseline",
          "Read the call summaries in the first weeks",
          "Note calls that needed a person and whether the handover worked",
          "Track callbacks made and jobs won separately",
          "Review wording and rules weekly"
        ]
      },
      {
        "heading": "Honest limits",
        "paragraphs": [
          "No provider can promise more jobs, and any estimate on this site is a planning aid, not a forecast. Cost depends on call volume and what you want the receptionist to do, so a real price only comes after someone looks at your calls.",
          "LYCORE's free review gives you that answer with no pressure and no obligation. If you want to hear how the receptionist sounds first, the Test our AI agent widget on the site lets you try it."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What if callers hang up when they hear it is an AI?",
        "answer": "Some may. That is a reason the receptionist always says it is an AI assistant and lets callers ask for a person, and a reason to watch hang-ups in your summaries during the first weeks. If the greeting is losing callers, change the wording."
      },
      {
        "question": "How long does setup take?",
        "answer": "It depends on how many call types you have, what needs to be connected and how much testing the routing needs. LYCORE checks what can be connected before a build is agreed, so you know the scope up front."
      },
      {
        "question": "Will it replace my office manager?",
        "answer": "No. It takes calls you cannot take and passes the details on. Your staff still make the decisions, book the jobs that need judgment and take over whenever a caller asks for a person."
      },
      {
        "question": "Does it work for law firms, dentists and med spas?",
        "answer": "For non-clinical and non-legal calls, yes. It takes messages, captures details and follows your rules, but it does not give legal, dental or medical advice and does not decide who becomes a client or patient. Your staff make those calls."
      },
      {
        "question": "What happens with an emergency call?",
        "answer": "It asks the intake questions you approved and follows your rules: transfer live where your phone setup supports it, or take a message and alert you. You approve what happens if nobody answers the transfer."
      }
    ]
  },
  "/resources/ai-receptionist-vs-answering-service": {
    "sections": [
      {
        "heading": "The real difference is who follows the rules on the call",
        "paragraphs": [
          "A traditional answering service uses human agents, usually working for many businesses at once, who follow the script and instructions you give them. An AI receptionist follows the intake questions and routing rules you approve, and does so in the same way on every call at any hour. Both can capture a name, a number and a reason for the call. The difference is what happens on a call that does not fit the script.",
          "A person can improvise, show real empathy and pick up on a caller's tone, which matters for frightened, grieving or very angry callers. A receptionist that is an AI assistant does not improvise; it hands over to a person rather than guessing. Whether that is a strength or a weakness depends on your calls.",
          "Coverage works differently too. Human services depend on staffing and on how many agents are on shift, so it is fair to ask how they cope at peak times. An AI receptionist answers in your business's name at any hour, and its limits show up in configuration and testing instead of headcount.",
          "Reporting is worth comparing as well. Ask to see what you get after each call: a recording or transcript, a written summary, or only a message. What you can read afterward decides how quickly you can spot a problem and fix the rules."
        ]
      },
      {
        "heading": "Sort your calls before you compare providers",
        "paragraphs": [
          "The comparison gets easier once you list what your calls actually are. Write out each type and mark whether it is routine or needs a person's judgment. Most service businesses find that a large share of calls are the same handful of requests, plus a small share that are urgent, sensitive or unusual.",
          "Neither option replaces a licensed professional or the owner's own decisions, and both need clear escalation rules. Work out which call types you would trust to a script and which you would not.",
          "Cost usually differs in shape as well as size, because human services and AI receptionists may bill by the minute, by the call or by plan. Compare the bill for your own call volume, not the headline rate. Cost depends on call volume and what you want done on each call, and LYCORE quotes after a free review with no pressure and no obligation."
        ],
        "list": [
          "Question about service area or hours: either works",
          "New job intake with name, number, address and reason: either works",
          "Booking into a calendar: depends on what can be connected",
          "Urgent dispatch: needs clear transfer rules with either",
          "Upset or grieving caller: a person is usually the better first voice",
          "Legal, medical or dental judgment: your staff, not either service"
        ]
      },
      {
        "heading": "Hybrids: use each for what it does well",
        "paragraphs": [
          "You do not have to choose one. A workable split is to let the receptionist handle routine intake and overflow, and to route sensitive calls to your own staff or to a human service you already trust. Some owners also keep a human service for a narrow set of calls and use a receptionist for everything else.",
          "If you run both, decide which one answers first and where the other picks up. Otherwise callers get passed around in circles. Test the handover by calling in yourself before it goes live.",
          "Start small. Route one type of call, such as after-hours inquiries, to the new setup for a few weeks and compare it with what your current service produced for the same calls. That gives you evidence from your own phone, which is worth more than any comparison page, including this one."
        ]
      },
      {
        "heading": "Questions to ask either kind of provider",
        "paragraphs": [
          "Whichever way you lean, put the same questions to every provider so the answers are comparable. Ask what happens on a call it cannot handle, who sets up and updates the rules, how you review what was said, and how call recording and consent are handled.",
          "Ask about money in the same order: how it is billed, what counts toward any limit, what overage looks like, whether there is a setup charge, how long the contract runs and how to cancel. Plans with a minimum term or automatic renewal are worth reading closely before you sign."
        ],
        "list": [
          "What does a caller hear first?",
          "What happens when it cannot answer?",
          "How do I hear or read every call?",
          "How are recording and consent handled?",
          "What is the contract term and how do I cancel?",
          "Who fixes it when a call goes wrong?"
        ]
      },
      {
        "heading": "Honest limits",
        "paragraphs": [
          "LYCORE sells an AI receptionist, so weigh that when you read this page. If your calls are mostly sensitive, or your callers reliably want a human first, a human service may be the better fit, and we would rather say so in a free review than sell you the wrong thing.",
          "Whatever you choose, test it with real call scenarios before you rely on it, and keep reading the call summaries after it goes live. No option guarantees more booked jobs."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Which is better for emergency calls?",
        "answer": "Neither wins by default. What matters is the rule for the call: what counts as an emergency, who is reached and what happens when they do not answer. LYCORE follows the transfer rules you approve, and live transfer is included where your phone setup supports it."
      },
      {
        "question": "Can I keep my current answering service and add a receptionist?",
        "answer": "Yes, as long as you decide which one answers first and where the other takes over. Run a few test calls so you know how the handover sounds to a caller."
      },
      {
        "question": "Do callers prefer speaking to a person?",
        "answer": "Some do, especially when the call is emotional or complicated. That is why the receptionist tells callers it is an AI assistant and hands over to a person when asked, and why sensitive calls are better routed to staff."
      },
      {
        "question": "How do I test the two fairly?",
        "answer": "Use the same set of scenarios on both: an emergency, a routine question, a booking request, an upset caller and someone asking for the owner by name. Score each on whether the caller got a clear next step and whether you got a usable summary."
      },
      {
        "question": "Who is responsible if a call is handled badly?",
        "answer": "You remain responsible for your business, whichever service you use. Ask each provider how calls are reviewed and how a mistake gets corrected, and read the summaries yourself in the first weeks."
      }
    ]
  },
  "/resources/missed-call-text-back": {
    "sections": [
      {
        "heading": "What happens between the ring and the reply",
        "paragraphs": [
          "A missed call text back is a short chain of events. Your phone system records a call as unanswered, a rule you set decides whether that call qualifies, an approved text goes to the caller, the caller may reply, the reply is routed to you or your team, and a person handles anything that needs judgment.",
          "What counts as missed depends on your phone setup. A call that rings out, a call you decline, a call that goes to voicemail and a call outside your open hours are different events, and what can be detected depends on the phone system you use. LYCORE checks what your setup allows before a build is agreed.",
          "Speed is worth a word. The point of the text is that it arrives while the caller still has your number on their screen and is still deciding whom to ring next. Exactly how fast it arrives depends on your phone system and carrier, so test it rather than assume."
        ]
      },
      {
        "heading": "The pieces you control",
        "paragraphs": [
          "Most of the quality of a text back comes from settings you choose, not from the technology. The trigger rules decide which calls get a text, the message wording decides whether people reply, and the routing decides whether the reply is seen. Each one deserves a decision written down.",
          "Quiet hours matter as well. A text sent at 2 a.m. can be fine for a caller who rang at 2 a.m., but you should decide what your business says and what the follow-up looks like in the morning."
        ],
        "list": [
          "Which calls trigger it: unanswered, after hours, or both",
          "The exact wording of the message",
          "Quiet hours and how often the same number can be texted",
          "Numbers to exclude, such as staff and suppliers",
          "Who receives replies, by day and by night",
          "What a booking action looks like, if one is offered"
        ]
      },
      {
        "heading": "Consent, opt-out and carrier rules in plain terms",
        "paragraphs": [
          "Texting a customer is regulated, and the rules vary by situation. In practice you need a way for a person to stop messages, a record of what was sent and a message that clearly comes from your business. Every text should carry opt-out wording, and a STOP reply must be respected.",
          "Carriers also set their own rules for business texting, and those rules change, so a message that goes through one month can be filtered the next. LYCORE reviews consent requirements during setup, and you should confirm the rules with your own advisor. This page is not legal advice."
        ]
      },
      {
        "heading": "How it differs from voicemail, an auto-reply and a receptionist",
        "paragraphs": [
          "Voicemail waits for the caller to act, and Invoca reports that fewer than 3% of callers sent to voicemail leave a message. A text back reaches out to the caller instead, which is why it can help. It still depends on the caller being on a mobile number that can receive texts, and on a person being ready to answer.",
          "A receptionist answers the call itself, in your business's name, says it is an AI assistant, and captures the name, number, address and reason for the call. A text back is a good fit behind it: the receptionist handles the calls it can, and the text catches anything that still goes unanswered. Neither should be presented as a person.",
          "Some businesses also want automatic replies to whatever comes back. Keep the boundary clear: an approved text acknowledges the missed call, and a person or an approved workflow answers what the caller sends in return."
        ]
      },
      {
        "heading": "Checklist before go-live",
        "paragraphs": [
          "Before any text goes to a real customer, walk through the whole flow yourself. Call from another phone, let the call go unanswered, read the message, reply and try STOP. Then check that the reply lands with the person you named.",
          "After launch, check the replies once a week for the first month and adjust the wording. You will find calls you did not want texted and questions the message never anticipated.",
          "Keep a simple record for the first month: how many texts went out, how many got a reply, how many replies became a job and how many went to numbers you did not want texted. Those four counts show you whether the rule is too wide or too narrow, and they make the next change easy to judge."
        ],
        "list": [
          "Test call goes unanswered and triggers the text",
          "Message wording is approved and reads like your business",
          "STOP opt-out works",
          "Reply reaches the right person, day and night",
          "Excluded numbers do not receive a text",
          "Consent requirements have been reviewed"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does the text go to every caller?",
        "answer": "Only to the ones your rules select. You decide which calls trigger it and which numbers are excluded, so it is not a blanket message to everyone who rings."
      },
      {
        "question": "What if the caller has a landline?",
        "answer": "A text cannot reach a landline, so that caller will not get it. It is a good reason to answer the call with a receptionist as well, rather than relying on text alone."
      },
      {
        "question": "What happens when someone replies STOP?",
        "answer": "They should stop receiving messages. Opt-out handling is part of the setup, and a STOP reply should be respected from then on."
      },
      {
        "question": "Can the text book an appointment?",
        "answer": "That depends on what can be connected. Where your calendar or booking tool can be connected, a booking can be offered. Where it cannot, the reply is routed to your team, who confirm the booking."
      },
      {
        "question": "Is it the same as a chatbot?",
        "answer": "No. A text back sends a short approved message and routes the reply to a person or workflow. It does not pretend that someone from your business has replied, and a person handles anything complicated."
      }
    ]
  },
  "/resources/missed-call-text-back-calculator": {
    "sections": [
      {
        "heading": "Field one: missed calls per week",
        "paragraphs": [
          "Use your call log, not your memory. Count calls that rang out, calls that went to voicemail and calls where the caller hung up after a few seconds. Leave out your own crew, suppliers, spam and wrong numbers, because those are not lost customers.",
          "Count calls, not callers. If one person rings three times in ten minutes, that is one opportunity, not three. Use a typical week, not your worst one. If your work is seasonal, run the calculator twice, once for a busy week and once for a slow one, and keep the two results separate.",
          "A quick way to check your count is to compare two sources. If your phone app shows one number of missed calls and your call tracking shows another, find out why before you enter either. Forwarded calls, a second line and calls to a mobile number are the usual gaps."
        ]
      },
      {
        "heading": "Field two: average job value",
        "paragraphs": [
          "Enter what a typical new customer is worth, and use the value of a completed job, not a quote. Do not use your biggest job, and do not include a one-off project that will not repeat. If you do small repairs and large installs, run the calculator once for each.",
          "Revenue is the easy number, but profit is the honest one. If you can estimate what you actually keep from a typical job, use that for a more cautious result. Lifetime value from repeat work is real for many trades, but leave it out of your main run and look at it in a second run.",
          "Watch for an average that mixes very different work. One average of a small service call and a full replacement describes neither. Splitting the calculation by job type takes a few minutes and gives you two results you can trust more than one blended number."
        ]
      },
      {
        "heading": "Field three: possible recovery",
        "paragraphs": [
          "This is the field where people fool themselves, so slow down. It is the share of your missed calls you could plausibly turn into a booked job if the caller got a fast response. It is smaller than it feels, because not every missed call was a customer, not every caller still wants the work by the time you respond, and you will not win every job you quote.",
          "Think through the chain. Of the missed calls, how many were real customers, how many would reply to a text or call back, and how many would you win? Start with the lowest figure you would still find worth acting on.",
          "Then run three cases: cautious, middle and hopeful. Plan around the cautious one and treat the others as upside."
        ]
      },
      {
        "heading": "Sanity-check the result",
        "paragraphs": [
          "A calculator will multiply whatever you give it, so check the answer against your own business. Divide the result by your average job value to see how many extra jobs it implies each week. Ask whether your crew has room to do them, and whether the number of jobs is smaller than the number of real customers among your missed calls, which it has to be.",
          "Then compare the annual result with your yearly revenue. If it looks like a large share of what you make now, one of your inputs is too high. Finally, put the monthly result beside a quote from any provider, so that you compare the value of the opportunity with the cost of pursuing it.",
          "Try the calculator backwards as a last test. Take a result you would be happy with and ask what recovery share it needs. If that share is far higher than anything you have seen in your own follow-up, the plan depends on optimism, so trim the plan."
        ],
        "list": [
          "Extra jobs implied per week: does that fit your crew's capacity?",
          "Extra jobs versus real customers in the missed calls: can it exceed them?",
          "Annual result versus yearly revenue: does it look too large?",
          "Cautious case versus middle and hopeful cases: is the gap wide?",
          "Result versus the quote from a provider: does the cautious case still cover it?"
        ]
      },
      {
        "heading": "What the calculator cannot tell you",
        "paragraphs": [
          "It cannot tell you what will happen. It is a planning aid that shows the size of an opportunity worth investigating, and it does not predict revenue, bookings or results. Missing tracking is unknown data, not proof of a small problem.",
          "If you go ahead with any change, measure the outcome. Keep your baseline call log, then compare the same figures after the change goes live and adjust your inputs to what you actually see."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Should I use revenue or profit for the job value?",
        "answer": "Profit gives the more honest answer if you can estimate it. Revenue is simpler and many owners use it. Whichever you choose, use the same one every time so your results are comparable."
      },
      {
        "question": "Should after-hours calls be included in missed calls?",
        "answer": "Yes, if they were from real customers with a job. ServiceTitan's 2022 call data suggests smaller shops booked about 9% of calls after 6 p.m., which is a reason to look at evenings specifically, but your own log is the better guide."
      },
      {
        "question": "What recovery percentage should I enter?",
        "answer": "Enter the lowest figure you would still find worth acting on, then try a middle and a hopeful case. There is no standard number, and this site does not offer one. Your own record of how quickly customers reply and how many you win is the best basis."
      },
      {
        "question": "What if the result looks huge?",
        "answer": "Treat it as a warning about your inputs. Check that you are counting calls, not callers, that wrong numbers are out and that the job value is typical. Then compare the result with your yearly revenue and your crew's capacity."
      },
      {
        "question": "What if I do not track my calls?",
        "answer": "Start now. Even two weeks of a manual tally or a phone log export gives you a better input than a guess, and you will need that baseline to judge any change you make."
      }
    ]
  },
  "/resources/review-automation": {
    "sections": [
      {
        "heading": "The completion signal: when a request is legitimate",
        "paragraphs": [
          "A review request should follow a real event: the job is finished, the invoice is settled or the customer has confirmed the work is done. It should not follow an estimate, a first visit that ended in a return trip, or a complaint that is still open. If your job system marks work as complete, that is the natural trigger.",
          "Send soon enough that the customer remembers the visit, but not so soon that they have not yet seen the result. A roof that looks fine on the day may show a leak after the next rain, so for some trades a short wait is sensible. Each customer should be asked once for each job, not once a week.",
          "Repeat customers need a rule too. If a customer has had three jobs this quarter, decide whether each one triggers a request or whether you ask again only after a set gap. Otherwise your best customers get the most messages, which is the opposite of what you want."
        ]
      },
      {
        "heading": "Review gating and why to avoid it",
        "paragraphs": [
          "Review gating means asking customers how happy they are first, sending the happy ones to a public review page and the unhappy ones to a private form. It looks tidy and it is a bad idea. Major review platforms have rules against selectively soliciting reviews and suppressing negative ones, and those rules change.",
          "It also has a practical cost. If you hide criticism, you lose the signal that tells you what to fix. An honest request goes to every eligible customer, and it lets people say what they think in public.",
          "Check the current policy of each platform you use before you set anything up. LYCORE builds the request path around fair asking, and you should confirm the rules for your platforms with your own advisor."
        ]
      },
      {
        "heading": "What a good request looks like",
        "paragraphs": [
          "A good request is short, comes from your business name and asks for honest feedback. It links straight to the review page for the platform your customers use, and it makes no promise of a reward. Ask once, follow up once at most, and stop.",
          "Choose the platform that matters for your trade. For most local service businesses that is Google. Where the trade has its own directory, you can point customers there too, but do not send someone to five places at once.",
          "Say what the review is for. One sentence about how feedback helps you improve reads as more honest than a plea for stars. Read the message aloud once, and if you would not say it to the customer's face, change it."
        ],
        "list": [
          "Written in your voice, from your business name",
          "One direct link, not a page of options",
          "Asks for honest feedback, not five stars",
          "No discount, gift or prize for a review",
          "One follow-up at most",
          "Stops when the customer replies or opts out"
        ]
      },
      {
        "heading": "Handling the reviews that come back",
        "paragraphs": [
          "Each new review should become a task for someone. Reply to the good ones with a short thank-you, and answer the critical ones calmly, stating what you will do and offering a way to talk offline. A polite, specific reply reads better to future customers than either silence or an argument.",
          "In dental, med spa and legal businesses, be careful about what a public reply confirms. Do not acknowledge that someone was a patient or client in a public response, and check your obligations with your own advisor before replying at all.",
          "Then use the reviews. If three customers mention the same problem, the answer is in the operation, not in the request process."
        ]
      },
      {
        "heading": "Checklist and honest limits",
        "paragraphs": [
          "Review automation makes it easier to ask every eligible customer. It does not guarantee more reviews, higher ratings or better rankings, and no request wording can promise them. The experience the customer had matters more than the message.",
          "Before you go live, test the flow on your own phone and read the wording aloud. If it sounds like a form letter, rewrite it.",
          "Assign the work as well. Someone should check for new reviews on a set day each week, and someone should own the replies. Automation handles the asking, and a person handles the answering."
        ],
        "list": [
          "Completion event is clear and accurate",
          "Every eligible customer gets the same request",
          "No filtering by sentiment",
          "Incentives are not offered",
          "Reviews route to a named person",
          "Platform rules have been checked"
        ]
      }
    ],
    "faqs": [
      {
        "question": "How soon after the job should I ask?",
        "answer": "Soon enough that the customer remembers the visit, and after the work is actually complete. There is no single right delay. For jobs where problems show up later, wait long enough for the customer to see the result."
      },
      {
        "question": "What if a customer complains privately?",
        "answer": "Handle it as a service issue first. Do not steer them away from reviewing, and do not use complaints to decide who receives the request. You can still invite them to share honest feedback once the problem is resolved."
      },
      {
        "question": "Can I give a discount for leaving a review?",
        "answer": "It is best not to. Platforms generally restrict incentivized reviews, and offering rewards makes reviews less trustworthy. Check each platform's current rules."
      },
      {
        "question": "Which platform should I ask people to use?",
        "answer": "Pick the one your customers already use and search on. For most local service businesses that is Google, but choose one main platform and keep the request simple."
      },
      {
        "question": "Will review automation raise my star rating?",
        "answer": "It can increase how many customers are asked, but it cannot promise a higher rating. Ratings depend on the work and the experience, and on who chooses to respond."
      }
    ]
  },
  "/resources/crm-vs-field-service-management": {
    "sections": [
      {
        "heading": "Decide which system owns which moment",
        "paragraphs": [
          "The clearest way to compare a CRM and field-service software is to follow a customer from first call to final invoice and mark which system should own each step. A CRM is usually strongest at the front: inquiries, follow-up, quotes and marketing history. Field-service software is usually strongest in the middle: scheduling, dispatch, job notes and invoicing.",
          "Many service businesses end up with both, and problems appear at the handoffs. A lead is booked in one system and the job lives in another, so the phone number is typed twice and the history is split. Naming an owner for each step prevents most of that.",
          "If you are unsure, draw it on paper: one row per stage, one column per system, and a tick wherever a system does that job today. The gaps and the double ticks show you where the work is."
        ],
        "list": [
          "Inquiry and first contact: front-end system or CRM",
          "Qualification and quote: whoever handles sales",
          "Booking and scheduling: field-service software",
          "Dispatch and job completion: field-service software",
          "Invoice and payment: the accounting-linked system",
          "Follow-up and reviews: CRM or follow-up automation"
        ]
      },
      {
        "heading": "Five questions that settle most cases",
        "paragraphs": [
          "Ask where leads arrive today, who qualifies and books them, who schedules the crew, what breaks when information moves from one person to the next, and where your customer history really lives. The answers point toward the system that needs strengthening first.",
          "If your pain is scheduling, dispatch and invoicing, look at field-service software. If it is lost leads and no follow-up, start with the front end. Many field-service tools include basic lead features and may already do what you need, so check what you own before you buy something new.",
          "Consider the size of the team too. A two-person shop may run everything in one tool and a spreadsheet, while a business with several crews and an office needs real dispatch. Pick for the operation you will have over the next year, not the one in a vendor demo."
        ]
      },
      {
        "heading": "Connecting instead of replacing",
        "paragraphs": [
          "Replacing the system your crew uses every day is a big job. Connecting around it is often less disruptive. What can be connected depends on the tools you use, the permissions available and the connection method, and LYCORE checks this before a build is agreed. It does not claim native integrations with any software company.",
          "Whatever you connect, decide which system is the source of truth for each detail: phone number, address, job status and payment. Keep it in one place and let the other read it, or you will end up with two versions of the same customer.",
          "Automations that send messages should belong to one system only. If both your CRM and your job software send reminders, the customer gets two.",
          "Ask one more thing of any tool that touches a lead: what does the customer see? A text from an unknown number, a duplicate reminder or a call from someone with no history all look disorganized, and they cost trust."
        ]
      },
      {
        "heading": "Mistakes to avoid",
        "paragraphs": [
          "The common mistakes are buying a second system before using the first, importing messy data and hoping it cleans itself, and switching tools in the middle of your busy season. Another is letting everyone in the office use their own spreadsheet, which becomes a third system nobody owns.",
          "Write the rules down even if they seem obvious. Who enters the lead, who confirms the booking, who closes the job and who follows up? A one-page list saves more time than most software settings."
        ],
        "list": [
          "Two systems both sending reminders",
          "No named owner for customer data",
          "Importing duplicate or outdated records",
          "Changing platforms during peak season",
          "Connecting tools before the process is written down"
        ]
      },
      {
        "heading": "Where the receptionist and follow-up fit",
        "paragraphs": [
          "A receptionist that answers your calls captures the name, number, address and reason for the call and sends you a summary. Where that information lands depends on what can be connected. If your CRM or booking tool can be connected, the details can be recorded there. If not, the summary goes to you or your team, and someone enters it.",
          "Lead follow-up works the same way. It sends an instant acknowledgement and a follow-up the owner has approved, and it stops when the customer replies or a person needs to step in. Decide which system should record that a follow-up happened, so your team can see it."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can I just use a spreadsheet?",
        "answer": "For a small business with few leads, yes, for a while. A spreadsheet stops working when several people edit it, when follow-up dates get missed or when you need history by customer. Move when the spreadsheet starts costing you calls or jobs."
      },
      {
        "question": "Do I need a CRM if I already have field-service software?",
        "answer": "Maybe not. Many field-service tools handle basic lead tracking and follow-up. If your lost leads mostly happen before the job is booked, check whether your existing tool covers that before you add another."
      },
      {
        "question": "Which system should hold the customer's phone number?",
        "answer": "Choose one as the source of truth and let the other read it. The phone number is usually the key that ties calls, texts and jobs together, so it is worth deciding early."
      },
      {
        "question": "What happens to my data if I switch tools?",
        "answer": "That depends on the tools and how they export. Clean your records before you move them, and confirm what history can be exported before you commit to a switch."
      },
      {
        "question": "Can LYCORE connect to my software?",
        "answer": "It depends on the tools, permissions and connection methods available. LYCORE checks what can be connected before a build is agreed, and does not assume an integration will work."
      }
    ]
  },
  "/services/after-hours-answering-service": {
    "sections": [
      {
        "heading": "What counts as after hours for a service business",
        "paragraphs": [
          "An after hours answering service covers the times you cannot answer, and for most owners that is a longer list than nights and weekends. It includes the evening, the Sunday, the holiday, and the hour at lunch when everyone is out. It also includes the middle of a working day, when you are on a job, on a roof or with a patient in the chair.",
          "The gap matters. ServiceTitan's 2022 call data found smaller shops booked about 26% of calls at peak times and about 9% after 6 p.m. That is industry data, not a promise of what you will book, but it points at where the drop happens.",
          "Start by writing down your own version. When does the office actually stop answering? Which hours has the phone been ringing with nobody free? The answer is the schedule the receptionist works to.",
          "Lunch is the one owners forget. Half an hour with the whole crew out can be the difference between a call answered and a customer who moves on. It counts as after hours for the receptionist as soon as you say it does."
        ]
      },
      {
        "heading": "Emergency and routine calls are handled differently",
        "paragraphs": [
          "The receptionist answers every after-hours call in your business name and says it is an AI assistant acting for you. It asks the questions you approved, and the first job is to sort the call. A homeowner with water running through the ceiling is not the same as a caller asking for a quote next month.",
          "For a routine call, it captures the name, number, address and reason, offers times where your calendar can be connected, and otherwise takes a booking or callback request for your team to confirm. For a call that meets your emergency rule, it takes the urgent path you chose: a live transfer, an immediate alert, or a message marked urgent.",
          "You write what counts as an emergency for your trade. The receptionist does not decide that on its own, and it does not make professional judgments about the problem.",
          "Callers get a plain explanation of what will happen next. A routine caller hears that the team will follow up at a stated time. An urgent caller hears that the call is being passed on now and what to do if nobody responds. Neither is left to wonder."
        ]
      },
      {
        "heading": "How you are alerted",
        "paragraphs": [
          "The point of an alert is that it reaches the right person and only for the calls that deserve it. You decide who is alerted, at what hours and for which kinds of call. The way the alert arrives and where it goes are checked against your tools and phone setup before the build is agreed.",
          "A common approach is to keep the list of night-time alerts very short: a real emergency and a hot lead from an existing customer, for example. Everything else can wait for the morning.",
          "Set alert rules by type of call, not by hour of night. A routine question can wait until morning at any time, and a call about water coming through a ceiling should not. The rules should say which is which.",
          "Alert fatigue is real. If your phone buzzes every night for calls that are not urgent, you will start ignoring it, and then the one that matters gets missed. Tighten the rule until an alert means something."
        ],
        "list": [
          "Real emergencies, as you define them",
          "Existing customers with an urgent problem, if you want them treated that way",
          "A caller who asks for a person and meets your transfer rule",
          "Nothing else, unless you choose otherwise"
        ]
      },
      {
        "heading": "Live transfer after hours",
        "paragraphs": [
          "Live transfer is included where your phone setup supports it. You approve the transfer rules and what happens if nobody answers the transfer. For example: try the on-call person, then a second person, then take a message and tell the caller when to expect a callback.",
          "Who is on call and when is your decision, and it should be written down. If the rule says ring the owner at 2 a.m., the owner should have agreed to that. Test the whole chain before launch, including the case where nobody picks up.",
          "Transfers need testing more than anything else here. The order of numbers, how long each rings and what the caller hears if nobody answers all have to be exact. A transfer that rings out in silence is worse than none, so the fallback is part of the rule."
        ]
      },
      {
        "heading": "The morning summary",
        "paragraphs": [
          "The summary is what turns a night of calls into a plan for the day. For each call it should say who called, the number, the address, the reason, what the receptionist did and what needs you. You should be able to read it in a minute over coffee.",
          "When the summary arrives, where it goes and how it is grouped are agreed during setup. Read the first week yourself and ask for changes, because you will know what you need to see at 7 a.m. better than any template.",
          "Agree what goes at the top. If a call needs a callback first thing, the summary should say so. If a booking was recorded, it should show the time, and if the receptionist could not answer something, it should say what the question was."
        ],
        "list": [
          "Who called, and the number",
          "The address and the reason for the call",
          "What the receptionist did on the call",
          "What needs you first"
        ]
      },
      {
        "heading": "What an after hours answering service will not do",
        "paragraphs": [
          "It will not give legal, medical, dental or financial advice, and it does not make professional decisions. For law firms it takes messages and does not clear conflicts or decide whether to accept a case. For dental offices and med spas it handles non-clinical calls and passes clinical questions to staff.",
          "It is not an emergency dispatch service, and it does not replace 911. Your rules can tell it to advise anyone describing danger to life to call 911 first. It also does not promise prices, arrival times or outcomes you have not approved, and when it cannot answer reliably it hands over rather than guessing.",
          "It also does not pretend. It will not say it is a person, it will not promise an arrival time nobody has approved and it will not accept a job your rules say to send to a human. If a caller pushes for something outside the rules, it says it will pass the request to your team."
        ]
      },
      {
        "heading": "How to set the rules, and test them",
        "paragraphs": [
          "Setup begins with your rules on paper: your hours, the greeting, the intake questions, what counts as urgent, who gets alerted and the transfer order. Then the receptionist is built around them and tested with real call scenarios before launch, such as an emergency at midnight, a wrong number on a Sunday, a caller who wants a person and a transfer nobody answers.",
          "Routing, coverage and fallback are tested, and call recording and consent requirements are reviewed during setup. There is no long-term contract. A free review looks at how your after-hours calls are handled now, with no pressure and no obligation.",
          "Start with fewer rules and add as you learn. A first version with a clear urgent definition, a short intake and a simple transfer order beats a long rulebook nobody tested. Revise after the first week of real calls."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What hours does an after hours answering service cover?",
        "answer": "Whatever hours you set. Most owners cover nights, weekends and holidays, and many add lunch breaks and the stretches when the team is on jobs or in appointments. The receptionist can also answer all day, so you can choose after hours only or extend it to busy periods."
      },
      {
        "question": "Will I be woken up for every call?",
        "answer": "No. You decide which calls alert you and which wait for the morning summary. A short list of night-time alerts, such as a real emergency, usually works better than a long one."
      },
      {
        "question": "Can callers reach me live at night?",
        "answer": "Where your phone setup supports live transfer, yes. You approve the rules for who is called and in what order, and what happens if nobody answers. If nobody picks up, the receptionist takes a message and tells the caller what to expect."
      },
      {
        "question": "What does the receptionist say if it does not know the answer?",
        "answer": "It says it will pass the question to your team, captures the caller's details and moves on. It does not guess about pricing, timing or the problem itself."
      },
      {
        "question": "Can it book appointments outside office hours?",
        "answer": "Where your calendar or booking tool can be connected, it can offer times and record the booking. Where it cannot, it captures a booking or callback request for your team to confirm. What can be connected is checked before the build is agreed."
      },
      {
        "question": "Is this a replacement for an emergency service?",
        "answer": "No. LYCORE is not an emergency dispatch service and does not replace 911 or licensed emergency response. It answers your calls, follows your escalation rules and gets the details to the right person."
      },
      {
        "question": "How is this different from voicemail?",
        "answer": "Voicemail waits for the caller to do the work, and Invoca reports that fewer than 3% of callers sent to voicemail leave a message. The receptionist speaks to the caller, asks the questions and captures the details while they are still on the line."
      },
      {
        "question": "How do I try it before deciding?",
        "answer": "You can hear the receptionist with the Test our AI agent voice widget on the site. For your own business, a free review looks at how your calls are handled today, and your version is tested with real call scenarios before launch."
      }
    ]
  },
  "/resources/emergency-answering-service": {
    "sections": [
      {
        "heading": "What an emergency call answering service is, and what it is not",
        "paragraphs": [
          "An emergency call answering service picks up calls for a business at the times the team cannot, and handles the urgent ones differently from the rest. The job is to reach the right person quickly and carry the caller's details with the call. It does not fix the problem, and it does not send a truck.",
          "LYCORE is not an emergency dispatch service. It does not replace 911, and it does not stand in for licensed emergency response. The receptionist follows your escalation rules, and your rules can tell it to advise anyone describing danger to life to call 911 first.",
          "For a business with a crew in the field, the problem is rarely that emergencies are rare. It is that they arrive when nobody can answer: overnight, on a weekend or in the middle of another job. A caller who reaches a mailbox is unlikely to leave a message, and will ring the next company on the list.",
          "That is why the useful question is not whether an answering service can fix an emergency. It is whether it can get the caller to a person who can. The service is one link in a chain that also includes your on-call person, your phone setup and your own rules about who gets contacted."
        ]
      },
      {
        "heading": "Deciding what counts as an emergency in your trade",
        "paragraphs": [
          "The owner defines this, not the receptionist. A plumber might count water actively flowing or a sewage backup, an HVAC company no heat in winter, a locksmith a person locked out at night, and a roofer an open roof after a storm.",
          "Everything else is routine: quotes, scheduling, follow-up on an old job and questions about services. Say so in writing. The clearer the line, the less likely a caller is treated as an emergency when they are not, or the reverse.",
          "For law firms, dental offices and med spas, the receptionist handles non-clinical calls. Anything clinical or legal goes to your staff, and the receptionist does not judge urgency in a professional sense.",
          "Some owners define an emergency by what the caller reports. Others define it by who is calling, such as an existing maintenance customer. Both work. The definition just has to be short enough for the receptionist to apply in a few questions."
        ]
      },
      {
        "heading": "The path an urgent call takes",
        "paragraphs": [
          "The receptionist answers in your business name, says it is an AI assistant and asks the questions you approved. Those questions are short and specific, such as whether water is running now and whether the caller is safe. When the answers meet your urgent rule, the call takes the urgent path.",
          "That path is what you chose: a live transfer where your phone setup supports it, an immediate alert, or a message marked urgent. The caller is told what is happening, in plain words. The receptionist captures the name, number, address and reason either way, so nobody has to ask again.",
          "A routine call goes down the ordinary path. It is booked where your calendar can be connected, or taken as a booking or callback request for your team to confirm.",
          "Meanwhile the caller is not left in silence. A short, honest line such as 'I am passing this on now' is better than a pause. Where a transfer is not possible, the caller hears what to expect next."
        ],
        "list": [
          "The receptionist answers and says it is an AI assistant",
          "It asks your urgent questions, one at a time",
          "It applies your rule to the answers",
          "It transfers the call or sends an alert",
          "It records the name, number, address and reason"
        ]
      },
      {
        "heading": "When nobody picks up",
        "paragraphs": [
          "This is the part to design most carefully. You approve what happens if nobody answers the transfer. A workable order is the on-call person first, a second person next, then a message marked urgent with the caller told when to expect a call back.",
          "The caller should never be left guessing. Even when nobody answers, they should hear that their request has been recorded and roughly what happens next. Never promise an arrival time that nobody has agreed to.",
          "If a caller describes a fire, a gas smell or a medical problem, the right advice is to hang up and call 911. Put that line in your rules so the receptionist says it every time.",
          "Write the ladder as a list and read it aloud. If it sounds unworkable said out loud, such as ringing the owner at 3 a.m. every single time, it will not work at 3 a.m. either. Adjust it until the people on it have agreed to it."
        ]
      },
      {
        "heading": "Testing the rules before a customer does",
        "paragraphs": [
          "Routing, coverage and fallback are tested with real call scenarios before launch. Run the ugly ones: an emergency at 3 a.m., a routine call that sounds urgent, a caller who wants a person, a transfer that rings out. Each scenario should end with the right person holding the right details.",
          "After launch, read the first weeks of calls. If you are being alerted too often, tighten the rule. If a real emergency waited, loosen it. Call recording and consent requirements are reviewed during setup, and outcomes are never guaranteed.",
          "Keep a short record of false alarms and missed alarms. Neither is a failure of the tool as such. It is the rule telling you where it is too tight or too loose, and a few weeks of calls usually show which way to move.",
          "Finally, decide who reviews the summaries. A rule nobody looks at drifts. Put a ten-minute weekly review in someone's calendar for the first month, and the rest gets easier."
        ],
        "list": [
          "An emergency at 3 a.m.",
          "A routine call that sounds urgent",
          "A caller who asks for a person",
          "A transfer that rings out",
          "A caller who hangs up halfway through"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does an emergency answering service replace 911?",
        "answer": "No. LYCORE is not an emergency dispatch service and does not replace 911 or licensed emergency response. Your rules can tell the receptionist to advise callers who describe danger to life to hang up and call 911 first."
      },
      {
        "question": "Who decides what an emergency is?",
        "answer": "You do. The receptionist follows the escalation rules you approve and asks the questions you choose. It does not make professional judgments about the problem."
      },
      {
        "question": "How do urgent calls reach me?",
        "answer": "By the path you choose: a live transfer where your phone setup supports it, an immediate alert, or a message marked urgent. Who is contacted and in what order is agreed during setup."
      },
      {
        "question": "What happens if I do not answer an urgent call?",
        "answer": "You approve the fallback in advance, for example trying a second person and then taking a message with a promised callback window. The caller is told their request was recorded, and the fallback is tested before launch."
      },
      {
        "question": "Can I use it for emergencies in a regulated profession?",
        "answer": "For law, dental and med spa businesses, the receptionist handles non-clinical calls and passes clinical or legal questions to your staff. It does not give legal, medical or dental advice, and staff decide anything professional."
      },
      {
        "question": "How is this different from an after hours answering service?",
        "answer": "An after hours service covers every call when you are closed. Emergency handling is the part that sorts the urgent ones and gets them to a person. They are usually set up together, with different rules for emergency and routine calls."
      }
    ]
  },
  "/industries/construction": {
    "sections": [
      {
        "heading": "Construction answering service: who actually calls a contractor",
        "paragraphs": [
          "A construction answering service has to sort a wider mix of callers than most trades. A builder or general contractor hears from property owners about their project, subcontractors about scheduling, suppliers about deliveries, inspectors and permit offices, and people asking about a new build or remodel.",
          "Each of those needs a different person on your side. A supplier asking where to leave materials should reach the superintendent, a new homeowner inquiry should reach whoever estimates, and an owner asking about a change order should reach the project manager. Your AI receptionist asks who is calling and why, then routes by the rules you set.",
          "Then there are the calls that cannot wait: water getting into a building that is not dried in, a delivery blocking a road, a crew that cannot get on site. Those need the right person to know quickly, and they tend to arrive when you are on a roof or in a meeting with an inspector.",
          "Many of these callers are not customers, and each has a specific need: a supplier wants a drop location, an inspector wants a time window, a sub wants to know whether the site is ready. A single shared message box treats them all the same, which is why the right person hears late."
        ]
      },
      {
        "heading": "What an answering service for construction companies does on a call",
        "paragraphs": [
          "The receptionist answers in your company's name and says it is an AI assistant acting for the company. A caller can ask for a person at any point, and it hands over rather than guessing. It then works out who is calling: an owner, a sub, a supplier, an inspector or someone new.",
          "For an existing project it asks for the project name or address, the caller's name and company, a callback number and the reason, and sends that to the person you named for the project. For a new inquiry it asks about the type of work, the location, the timeline and how they found you, so your estimator starts with something to work from. Wrong numbers and sales calls are noted and closed.",
          "Where your calendar can be connected, it can offer times for a site visit or a call with an estimator. Where it cannot, it records a request for your team to confirm. It does not promise start dates, schedule changes or pricing.",
          "Owners with a project under way call with questions the receptionist cannot answer, and that is fine. It records the question, tells the caller that the project manager will follow up, and sends the message on so the owner is not left wondering whether anyone heard."
        ],
        "list": [
          "Owner and client calls go to the project manager",
          "Sub and supplier calls go to the superintendent",
          "New inquiries go to the estimator",
          "Inspector calls go to whoever is on site that day",
          "Billing and invoice calls go to the office"
        ]
      },
      {
        "heading": "Site emergencies, after hours and busy periods",
        "paragraphs": [
          "Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered and that fewer than 3% of callers sent to voicemail leave a message. That is home-services data rather than construction alone, but a contractor on a job site has the same problem: the person who would answer is holding a tool.",
          "After hours the receptionist answers everything. You decide which situations count as urgent, such as water intrusion, storm damage, a site security problem or a blocked access road, and who is alerted and how. If that person does not respond, the fallback you approved runs, so the call does not sit unanswered.",
          "During the day it can take overflow when the office is on another line, or answer everything while the team is out on jobs. Live transfer is included where the phone setup supports it. Missed call text back can send an approved text after an unanswered call, with STOP handling.",
          "Storms and cold snaps create their own clusters of calls. Decide beforehand who is on call, in what order to try people, and how long to wait before moving to the next one. The receptionist follows that order and records each attempt, so you can see afterward what happened."
        ]
      },
      {
        "heading": "What stays with your people",
        "paragraphs": [
          "The receptionist does not quote, bid, approve a change order, commit to a schedule or state a warranty position. It does not assess structural or safety questions. If a caller reports an injury or a hazard, it follows the escalation wording you approved and alerts the person you named, and any guidance about emergency services is yours to write.",
          "Complaints about workmanship, payment disputes and formal notices go to a person and are logged with the details the caller gave. Call recording and consent requirements are reviewed during setup, and routing, coverage and fallback are tested with real call scenarios before launch."
        ],
        "list": [
          "Bids, pricing and change order approvals",
          "Start dates and schedule commitments",
          "Safety incidents and hazard assessments",
          "Warranty, defect and payment disputes",
          "Any caller who asks for a person"
        ]
      },
      {
        "heading": "Fit with Procore, Buildertrend and your phones, and how to judge it",
        "paragraphs": [
          "Contractors use project tools such as Procore or Buildertrend, and often a mix of an office line and mobile phones. LYCORE is not a partner of those companies and does not claim native integrations. What can be connected depends on your tools and is checked before the build is agreed, and many companies start with a summary by text or email to the right person.",
          "Agree the measures before launch. Useful ones are calls answered outside office hours, urgent calls acknowledged by the named person within the time you set, new inquiries passed to your estimator, and calls that reached the wrong person, which a weekly read of the summaries will show. Missing records stay unknown, not zero.",
          "Outcomes are never guaranteed, and these are proposed measures, not promised results. Try the Test our AI agent widget, then book a free review for a plain answer on fit, with no pressure and no obligation."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can it tell a caller when the crew will arrive or the project will start?",
        "answer": "No. It does not commit to arrival times, start dates or schedule changes. It records the question and passes it to the person who owns the project."
      },
      {
        "question": "How does it handle an inspector or supplier who just needs one person?",
        "answer": "It asks who they are, which project and what they need, then sends that to the person you named for that kind of call. It keeps the questions short for callers like these. It transfers live where your phone setup supports it."
      },
      {
        "question": "What happens with a site emergency at night?",
        "answer": "It captures the project, address and what happened, then alerts the person you named under your urgent rules. If they do not respond, your approved fallback runs. It does not assess safety, and any wording about emergency services is yours."
      },
      {
        "question": "Can it tell which of our projects a caller means?",
        "answer": "Routing rules can be built around the project names and addresses you supply. When a match is unclear it records what the caller said and hands over instead of guessing."
      },
      {
        "question": "Is this only for large general contractors?",
        "answer": "No. It is built around your rules and your calls, so a small remodeling company and a larger builder both need callers sorted and the right person told. What differs is the routing and who is on call."
      },
      {
        "question": "Is there a long-term contract?",
        "answer": "No long-term contract is required. Pricing is quoted on a call after a free review, with no pressure and no obligation."
      }
    ]
  },
  "/industries/landscaping": {
    "sections": [
      {
        "heading": "Landscaping answering service: the calls that arrive in waves",
        "paragraphs": [
          "A landscaping answering service earns its place in the weeks when the phone will not stop: spring startup, the first warm weekend, fall cleanup, the day after a storm. Your crews are on properties with equipment running, and nobody can hear a phone or wants to stop mid-job to take a quote request.",
          "The calls fall into a few groups. There are new quote requests for maintenance, mulch, planting, irrigation or hardscape, recurring customers asking to skip, add or move a visit, property managers and HOAs, crew leads and suppliers, and storm cleanup.",
          "A homeowner asking for a quote usually calls a few companies and talks to whoever answers. Your AI receptionist answers in your company's name at any hour, captures what they want and where, and hands your estimator a request instead of a missed call.",
          "Property managers and HOAs call differently from homeowners. They may manage several sites, have their own vendor rules and expect a callback from a named person. The receptionist records the property, the contact and the request, and passes it to whoever handles commercial accounts."
        ]
      },
      {
        "heading": "What an answering service for landscapers does on a call",
        "paragraphs": [
          "The receptionist says it is an AI assistant acting for your company, and a caller can ask for a person at any point. It works out whether the caller is new or a current customer, then asks the questions you approved.",
          "For a new quote it captures name, number, the property address, the work wanted, the type of property and the timing, and asks whether they want a site visit. If you give it your service area, it checks the address against it and uses your wording for callers outside it. For a recurring customer it records the change they want, such as skipping next week or adding a cleanup. Where your scheduling tool can be connected it may be able to record the change, and otherwise the office confirms it.",
          "The receptionist does not quote or describe what a job would cost. Your estimator does that after seeing the property, and you get a summary of each call.",
          "Weather changes the calls. A rainy week produces a run of people asking whether visits are cancelled or moved. Give the receptionist your approved wording and the office contact, and it tells callers the office will confirm instead of guessing at your schedule."
        ],
        "list": [
          "New quote for lawn maintenance",
          "Seasonal cleanup",
          "Planting, mulch or hardscape project",
          "Irrigation repair or startup",
          "Change to a recurring visit",
          "Storm damage cleanup"
        ]
      },
      {
        "heading": "Seasonal peaks, storms and after hours",
        "paragraphs": [
          "ServiceTitan's 2022 call data found that smaller shops booked about 26% of calls at peak times and about 9% after 6 p.m. That is not landscaping-specific data, but peak season is the same problem: more calls than people to take them.",
          "For storm cleanup you decide which calls are urgent, such as a fallen tree across a driveway, and who is alerted. The receptionist captures the address and what the caller describes, marks the call under your rules, and does not assess how dangerous it is. Any wording about calling the utility or emergency services is yours to write.",
          "Missed call text back can send an approved text after an unanswered call, with STOP handling. Lead follow-up sends an instant acknowledgement and a follow-up schedule you approve, and it stops when the customer replies or a person needs to step in.",
          "Some homeowners call in the evening or on a weekend, when your office is closed. A call at 7 p.m. on a Sunday should end with a request waiting in your inbox, not a voicemail nobody checks until Monday."
        ]
      },
      {
        "heading": "What stays with your team",
        "paragraphs": [
          "Pricing, estimates and site assessments stay with your estimator. The receptionist does not advise on plants, lawn problems, fertilizer or chemical treatments, and it does not decide whether hazardous work is safe or worth taking. It also does not commit a crew to a day.",
          "Complaints about a missed visit or damage to a property go to a person and are logged. Call recording and consent requirements are reviewed during setup, and routing, coverage and fallback are tested with real call scenarios before launch.",
          "Crew leads call too, to say a truck is stuck, a gate is locked or a customer asked for extra work. Set a rule for those calls so they reach the office or an owner directly and are not treated like a customer inquiry.",
          "Talk through the first busy week before it arrives. Decide which calls go straight to a crew lead, which wait for the office, and who takes over when the office is at capacity. Then test those rules with practice calls."
        ],
        "list": [
          "Quotes, pricing and discounts",
          "Advice about plants, lawns or treatments",
          "Storm hazards and tree work decisions",
          "Crew scheduling and route changes",
          "Complaints about service or damage",
          "Any caller who asks for a person"
        ]
      },
      {
        "heading": "Fit with Jobber, LMN, Aspire and how to judge it",
        "paragraphs": [
          "Landscapers commonly use tools such as Jobber, LMN, Aspire or Housecall Pro. LYCORE is not a partner of those companies and does not claim native integrations. Whether a quote request lands in your tool or reaches the estimator by text or email depends on your setup, and that is checked before the build is agreed.",
          "Agree the measures before launch. Useful ones are calls answered in peak weeks against calls missed, quote requests captured with an address, callbacks completed within the time you set, and recurring-change requests handled by the office. Small samples and missing records should be reported as such, not rounded into a good number.",
          "Outcomes are never guaranteed, and these are proposed measures, not promised results. Try the Test our AI agent widget, then book a free review for a plain answer on fit, with no pressure and no obligation."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can it quote a price for mowing or a landscape install?",
        "answer": "No. It captures the address, the work wanted and the timing, then hands a request to your estimator. Pricing comes after someone has seen the property."
      },
      {
        "question": "What happens when a customer wants to skip or move a recurring visit?",
        "answer": "It records the customer, the address and the change requested. Where your scheduling tool can be connected it may be able to note the change, and otherwise your office confirms it. It does not promise a new date on its own."
      },
      {
        "question": "How does it handle storm cleanup calls?",
        "answer": "It captures the address and what the caller describes, then marks the call under the urgent rules you set and alerts the person you named. It does not judge how dangerous the situation is. Wording about the utility or emergency services is yours to write."
      },
      {
        "question": "Will it answer questions about lawn problems or chemicals?",
        "answer": "No. Advice about plants, lawns or treatments stays with your team. It records the question and passes it to the right person."
      },
      {
        "question": "Do I need it all year or only in peak season?",
        "answer": "That is worth talking through at the free review. No long-term contract is required, and the setup follows your own rules for when it should answer."
      },
      {
        "question": "Can it text back the people I miss?",
        "answer": "Yes, through missed call text back. An approved text goes to the caller after an unanswered call, with STOP handling, and replies go to you or your team. Consent requirements are reviewed during setup, and you should confirm the rules with your own advisor."
      }
    ]
  },
  "/resources/how-much-does-an-answering-service-cost": {
    "sections": [
      {
        "heading": "Why answering service cost is hard to pin down, and the models you will meet",
        "paragraphs": [
          "If you have searched for virtual receptionist pricing, you have probably found pages that show a range and pages that show nothing at all. The reason is that there is no standard unit. One provider charges for minutes, another for calls, another for a plan with an allowance, and each may count a call differently.",
          "So the same business can get quotes that look far apart without either being wrong. The difference is usually in how a call is counted, what the plan includes and what counts as an extra. This page does not quote a price or a range, because any figure would mislead you. It explains how the price is built so you can read a quote for yourself.",
          "Most quotes for an answering service or an AI receptionist fall into a small number of shapes. Some providers mix two of them, such as a monthly plan with an allowance and a per-minute rate above it.",
          "None of these is better in itself. The best fit depends on how steady your call volume is, how long your calls run and how much you value a predictable bill."
        ],
        "list": [
          "Per minute: you pay for the time a call lasts, so longer calls cost more",
          "Per call: you pay a set amount for each call answered, whatever its length",
          "Monthly plan with included minutes or calls: a bundle that covers a set amount, then a rate above it",
          "Flat monthly fee: one predictable amount, with limits and terms to check",
          "Per seat or per line: common in software with receptionist features, priced by user",
          "Setup fee: a one-time charge to configure the service"
        ]
      },
      {
        "heading": "Extras and extra fees that change the bill",
        "paragraphs": [
          "The headline rate is rarely the whole story. Providers often charge separately for things owners assume are included, and the list differs from one provider to the next. Overage is the biggest one: once you pass the calls or minutes in your plan, a different rate may apply.",
          "Other charges to look for include live transfer to your phone, bilingual coverage, call recording, after-hours and holiday coverage, appointment booking, integrations with your calendar or software and extra phone numbers. Ask whether each is included, charged separately or not offered.",
          "At LYCORE, live transfer is included where your phone setup supports it. Call recording and consent requirements are reviewed during setup. Other details depend on what you need, and they are covered when the price is quoted."
        ]
      },
      {
        "heading": "What to ask any provider",
        "paragraphs": [
          "Ask questions in the same order every time so the answers are comparable. Start with how a call is counted: does a minute begin when the phone rings, when the receptionist answers or when the caller speaks? Then ask what is included, what is extra and what happens if you go over.",
          "Ask what counts toward your total. Sales calls, wrong numbers and spam may all be billed as calls unless the provider filters them. Ask whether unused minutes roll over, and whether the price can change during the term.",
          "Then ask about the exit. How long is the contract, does it renew automatically, how much notice is needed to cancel and is there a fee for cancelling? LYCORE does not require a long-term contract."
        ],
        "list": [
          "How is a call or minute counted?",
          "What does the plan include, and what costs extra?",
          "What happens above the allowance?",
          "Do spam and wrong numbers count?",
          "Is there a setup fee?",
          "What is the contract term, and how do I cancel?"
        ]
      },
      {
        "heading": "How to compare quotes fairly",
        "paragraphs": [
          "Quotes only compare once you convert them to your own numbers. Take your call count and your average call length, then ask each provider to price a normal month and a busy month. A per-minute rate and a flat fee cannot be compared until you know how many minutes you actually use.",
          "Compare what a call includes, too. A service that takes a message is not the same as one that books an appointment, transfers live or sends a summary. Put each quote on one sheet with setup, extras, contract terms and the price of your busy month, and read them side by side."
        ],
        "list": [
          "Call count and average call length used for the quote",
          "What each call includes: message, booking, transfer or summary",
          "Setup and one-time charges",
          "Extras you would actually use",
          "Price for a busy month, not only a typical one",
          "Contract term, renewal and cancellation"
        ]
      },
      {
        "heading": "Hidden costs owners should check before signing",
        "paragraphs": [
          "The costs that surprise people are rarely the headline rate. Overage is the first: a plan with an allowance can look generous until a busy month pushes you past it. Ask what the rate above the allowance is, whether it applies automatically and whether you get a warning before it does.",
          "The second is the contract. Some providers require a minimum term, renew automatically and ask for notice before the end of the term, and a cancellation can carry a fee. A low monthly price with a long lock-in is a different deal from the same price month to month, so read the term before you read the rate.",
          "Also check what counts toward your total. Sales calls, wrong numbers and long calls from a chatty caller can all use up minutes, and prices can change during a term. LYCORE quotes after a free review with no pressure and no obligation, and no long-term contract is required."
        ],
        "list": [
          "Overage rate, and how you are told before it applies",
          "Minimum term and automatic renewal",
          "Notice needed to cancel, and any cancellation fee",
          "Calls and minutes that count toward the total",
          "Price changes during the term"
        ]
      },
      {
        "heading": "Will it pay for itself? Use your own numbers",
        "paragraphs": [
          "Start with the missed call calculator. Enter your missed calls per week, your average job value and a cautious recovery figure, and read the monthly result. Then divide the monthly cost you were quoted by your average job value. That tells you roughly how many extra jobs a month you would need to cover the cost.",
          "Ask whether that number is believable, given the real customers among your missed calls. If you would need more extra jobs than you miss real customers, the service probably does not pay for itself for you right now. If the number is small compared with your missed calls, a trial is reasonable.",
          "LYCORE quotes on a call after a free review of how your calls come in and what you want the receptionist to do. There is no pressure and no obligation, and no long-term contract is required. Outcomes are never guaranteed, so treat any estimate as a planning tool."
        ],
        "list": [
          "Monthly cost from the quote",
          "Divide it by your average job value, or by profit per job for a cautious answer",
          "Compare the answer with the real customers among your missed calls",
          "Repeat with a cautious recovery figure"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Why does this page not show a price?",
        "answer": "Because a fair price depends on your call volume and what you want done on each call, and any number here would mislead. The honest way to get one is a quote based on your real calls. LYCORE gives that on a call after a free review."
      },
      {
        "question": "Why do quotes for the same business vary so much?",
        "answer": "Providers count and bill calls differently, include different things and charge separately for extras. A quote per minute and a quote per plan are only comparable once you apply your own call volume and call length."
      },
      {
        "question": "Is per-minute pricing cheaper than a flat fee?",
        "answer": "It depends on your volume. Per-minute pricing can suit a steady, low-volume business, while a flat fee can suit a busier one, but only if the limits and overage terms are acceptable. Ask for the bill of a busy month to see."
      },
      {
        "question": "Is an AI receptionist cheaper than a human answering service?",
        "answer": "Not automatically. Both use varied pricing, and what matters is what is included and how calls are counted. Compare the same call volume and the same list of tasks on both."
      },
      {
        "question": "Is a setup fee normal?",
        "answer": "Some providers charge one and some do not. Ask what it covers, such as writing your intake questions, connecting your calendar and testing with real call scenarios, so you can see what you are paying for."
      },
      {
        "question": "Can I cancel anytime?",
        "answer": "That depends on the provider, so read the term, the renewal rules and the notice period. LYCORE does not require a long-term contract."
      }
    ]
  }
};
export const generatedNewServices: NewService[] = [
  {
    "slug": "after-hours-answering-service",
    "title": "After-Hours Answering Service",
    "description": "An after hours answering service that picks up nights, weekends and lunch breaks, sorts urgent from routine calls and sends you a clear summary. Free review.",
    "problem": "The phone does not stop ringing when you close. Customers call at 7 p.m. from the kitchen floor, on Sunday when the heat fails, and at noon when the whole team is on a job. Voicemail catches almost none of it, because callers who reach a mailbox mostly hang up and try the next company. You lose those calls without ever seeing them, and you cannot be everywhere to stop it.",
    "builds": [
      "A greeting in your business name at any hour, so callers are never left with a ring and a click",
      "Emergency calls sorted from routine ones by rules you write",
      "A live transfer or immediate alert when a call meets your urgent rule, where your phone setup supports it",
      "A clear summary of every after-hours call waiting when you start work"
    ],
    "workflow": [
      "A call comes in after hours, on a weekend or while the team is busy",
      "The receptionist answers in your business name and says it is an AI assistant",
      "It asks your intake questions and separates urgent from routine",
      "Urgent calls follow your escalation rule, and routine calls are booked or taken as a message",
      "You are alerted to anything that meets your rule",
      "A summary of every call is ready for you to review"
    ],
    "related": [
      "/services/ai-receptionist",
      "/services/missed-call-text-back",
      "/services/lead-follow-up"
    ],
    "seo": {
      "title": "After Hours Answering Service for Contractors - LYCORE",
      "h1": "After-hours answering service"
    },
    "evidence": {
      "summary": "An after hours answering service should be judged on what happens to real calls: who answered, what was captured and how fast the right person acted. Agree how you will count those before launch."
    }
  }
];
export const generatedNewIndustries: NewIndustry[] = [
  {
    "slug": "construction",
    "name": "Construction companies",
    "description": "Construction answering service for builders and contractors: answers owner, sub, supplier and inspector calls, captures the job and site, and alerts your team.",
    "problem": "I am on site all day and the phone never stops. An owner wants to talk about a change order, a supplier is asking where to leave the delivery, an inspector needs someone to let them in, and a sub is calling about tomorrow. When I miss the wrong one it costs me a day, and when I miss a new project inquiry the owner calls the next builder on the list.",
    "workflow": [
      "Call arrives from an owner, sub, supplier or inspector",
      "Caller type and reason identified",
      "Project name and site address captured",
      "Urgent site issues follow your escalation rules",
      "Right person notified with a call summary",
      "Callback or site visit request logged"
    ],
    "tools": [
      "Procore",
      "Buildertrend",
      "QuickBooks"
    ],
    "seo": {
      "title": "Construction Answering Service for Contractors - LYCORE",
      "h1": "Answering service for construction companies"
    },
    "playbook": {
      "headline": "Construction calls & project handoffs",
      "workflows": [
        {
          "name": "Site issue to project lead",
          "trigger": "A caller reports a problem on an active site, such as a blocked delivery, storm damage or a crew that cannot get in.",
          "action": "Capture the project name, site address, caller and company, what happened and a callback number, then notify the assigned project lead through the approved channel.",
          "handoff": "The project lead or superintendent decides the response. Safety incidents follow the company's own procedure and approved wording; the receptionist does not assess safety or promise a time on site."
        },
        {
          "name": "New project inquiry to estimator",
          "trigger": "A prospective owner calls about a build, remodel or addition.",
          "action": "Record the type of work, location, the timeline they have in mind and how they found the company, then create an estimator task and offer a site visit time or callback request.",
          "handoff": "The estimator confirms fit and the visit. No price, bid or start date is given on the call."
        }
      ],
      "quoteInputs": [
        "Active project list, site addresses and who owns each project",
        "Routing rules for owners, subs, suppliers, inspectors and new inquiries",
        "Project or calendar software, on-call schedule and after-hours escalation contacts"
      ],
      "boundary": "The receptionist does not quote, approve change orders, commit to schedules or assess site safety; project leads and estimators make those calls.",
      "metrics": [
        {
          "name": "Urgent call acknowledgement time",
          "definition": "Median time from an urgent-call notification to the named person's recorded acknowledgement; unacknowledged calls stay visible."
        },
        {
          "name": "New inquiry handoff rate",
          "definition": "New project inquiries assigned to an estimator divided by new project inquiries captured in the period; assignment is not a booked visit."
        }
      ],
      "related": [
        "/services/ai-receptionist",
        "/services/missed-call-text-back",
        "/services/lead-follow-up"
      ]
    }
  },
  {
    "slug": "landscaping",
    "name": "Landscaping companies",
    "description": "Landscaping answering service for lawn and landscape crews: answers quote and recurring service calls in peak season, captures the job and hands it on.",
    "problem": "In spring the phone rings all day while my crews are out with mowers and blowers running. Nobody can hear it, and nobody wants to stop mid-job to take a quote request. The homeowner calls three companies and books whoever answers, and the storm cleanup calls after a big blow are worse.",
    "workflow": [
      "Call arrives about a quote, recurring visit or cleanup",
      "Caller type and reason identified",
      "Property address and requested work captured",
      "Service area and urgent cleanup rules checked",
      "Estimator or office notified with a call summary",
      "Site visit or callback request logged"
    ],
    "tools": [
      "Jobber",
      "LMN",
      "Aspire",
      "Housecall Pro",
      "QuickBooks"
    ],
    "seo": {
      "title": "Landscaping Answering Service for Landscapers - LYCORE",
      "h1": "Answering service for landscapers"
    },
    "playbook": {
      "headline": "Landscaping quotes & seasonal service calls",
      "workflows": [
        {
          "name": "Quote request to estimate visit",
          "trigger": "A homeowner or property manager calls asking for mowing, cleanup, planting, hardscape or irrigation work.",
          "action": "Capture the address, the work wanted, the property type and timing, check the address against the approved service area, then create an estimator task with a site visit request.",
          "handoff": "The estimator confirms the visit and prepares the quote. No pricing or scope is given on the call."
        },
        {
          "name": "Recurring change and storm cleanup",
          "trigger": "A recurring customer asks to skip, add or move a visit, or a caller reports storm damage.",
          "action": "Record the customer, address and requested change or the damage described, mark urgent cleanup requests under approved rules, and notify the office or crew lead.",
          "handoff": "The office confirms schedule changes. A person decides whether to take hazardous work such as tree removal; the receptionist does not assess danger."
        }
      ],
      "quoteInputs": [
        "Service area, service list and seasonal call patterns",
        "Scheduling or quoting software and how recurring visits are tracked",
        "Storm and urgent-work rules, on-call contacts and fallback"
      ],
      "boundary": "The receptionist does not price work, advise on plants or chemicals, assess hazards or commit crews; estimators and the office make those decisions.",
      "metrics": [
        {
          "name": "Quote request capture rate",
          "definition": "Quote requests with a recorded address and requested work divided by quote requests received in the period; unreachable callers are shown separately."
        },
        {
          "name": "Callback completion rate",
          "definition": "Callback and site visit requests marked completed divided by requests due in the reporting period."
        }
      ],
      "related": [
        "/services/ai-receptionist",
        "/services/missed-call-text-back",
        "/services/lead-follow-up"
      ]
    }
  }
];
export const generatedNewGuides: NewGuide[] = [
  {
    "slug": "emergency-answering-service",
    "title": "Emergency answering service: how urgent calls get to the right person",
    "description": "How an emergency answering service sorts urgent calls, alerts the right person and hands over when nobody picks up. What it can do and what it cannot.",
    "answer": "An emergency answering service answers the call, asks a few questions to decide whether it is urgent, and sends urgent calls to the person you named by live transfer or immediate alert. LYCORE's receptionist does this by following your escalation rules. It is not an emergency dispatch service, and it does not replace 911 or licensed emergency response. The value is that a customer with a real problem reaches you, not a mailbox.",
    "steps": [
      "Write down what counts as an emergency in your trade and what does not",
      "Choose the questions that tell the two apart, and keep them short",
      "Decide who is called first, second and third, and at what hours",
      "Decide what the caller hears if nobody picks up the transfer",
      "Write the safety line: when the caller should hang up and dial 911",
      "Test with real call scenarios before launch, including the ones that fail",
      "Review the first weeks of calls and adjust the rules"
    ],
    "tradeoffs": [
      "A tight rule wakes you rarely but may miss a real emergency, and a loose rule catches everything but wakes you for routine work.",
      "A live transfer is fastest, but it needs someone to answer and depends on your phone setup.",
      "The receptionist follows the rules it is given, so it is only as good as the rules, and it hands over rather than judging.",
      "A person can read a frightened caller better than an AI can, so decide which calls should always reach a human."
    ],
    "related": [
      "/services/ai-receptionist",
      "/services/after-hours-answering-service",
      "/resources/how-to-stop-missing-calls-small-business"
    ]
  },
  {
    "slug": "how-much-does-an-answering-service-cost",
    "title": "How much does an answering service cost? What drives the price",
    "description": "Answering service cost and AI receptionist cost explained: the pricing models, the extra fees and hidden charges to ask about, and how to test if it pays back.",
    "answer": "There is no single price for an answering service, because providers charge in very different ways and the bill depends on your call volume and what you want done on each call. Virtual receptionist pricing usually comes down to how the provider counts a call, what is included in a plan, and what costs extra. This page does not quote a figure. It explains the models, the fees to ask about and how to work out whether the service would pay for itself with your own numbers.",
    "steps": [
      "Count your calls: total per week, missed per week and how many arrive after hours",
      "List what you want done on each call: answer only, take a message, book, or transfer live",
      "Ask each provider how a call is counted and billed, and what is included",
      "Ask about setup fees, overage charges and extras such as live transfer, bilingual service or call recording",
      "Ask about contract length, renewal and how to cancel",
      "Ask each provider for the bill for a typical month and a busy month, based on your own call volume",
      "Use the missed call calculator to compare the value of recovered customers against the quotes"
    ],
    "tradeoffs": [
      "A low headline rate can hide overage charges and extras that raise the bill.",
      "A flat monthly fee is easier to budget, but you may pay for capacity you do not use.",
      "Per-minute and per-call pricing can look fair, then rise quickly in a busy month.",
      "A cheaper service that only takes messages is not the same as one that books or transfers calls."
    ],
    "related": [
      "/services/ai-receptionist",
      "/resources/is-an-ai-receptionist-worth-it",
      "/resources/missed-call-text-back-calculator"
    ]
  }
];
export const generatedMeta: Record<string, { title?: string; description?: string }> ={
  "/about": {
    "title": "About Our Albuquerque Call Answering Company - LYCORE",
    "description": "LYCORE GROUP LLC is a young, founder-led company in Albuquerque, NM that answers calls and follows up on leads for US service businesses. See how we work."
  },
  "/ai-operations": {
    "title": "AI Operations for Service Businesses and Trades - LYCORE",
    "description": "AI operations for service businesses: take repetitive work off your staff between customers and the CRM or field-service software you use. Book a review."
  },
  "/book": {
    "title": "Book a Strategy Call for Your Service Business - LYCORE",
    "description": "Book a free strategy call to review how your service business handles calls and follow-up. Pick a time that suits you, no pressure and no obligation to buy."
  },
  "/commitments": {
    "title": "Our Commitments as a Remote-First Company - LYCORE",
    "description": "How LYCORE approaches its work, people and wider responsibilities as a remote-first, early-stage company. Read the commitments we are holding ourselves to."
  },
  "/commitments/career-growth": {
    "title": "Career Growth and Continuous Learning Pledge - LYCORE",
    "description": "How LYCORE approaches practical learning, feedback, responsibility and career growth for the people who work here as the company gets bigger. Read the pledge."
  },
  "/commitments/how-we-work": {
    "title": "How We Work: Ownership and Client Communication - LYCORE",
    "description": "The principles that guide how LYCORE handles ownership, communication, learning and client work, written plainly so you know what to expect. Read how we work."
  },
  "/commitments/social-impact": {
    "title": "Social Impact Pledge: Privacy and Fair Access - LYCORE",
    "description": "The public LYCORE pledge on responsible technology, fair access, privacy, inclusive communication and practical support for small businesses. Read it in full."
  },
  "/commitments/work-life-balance": {
    "title": "Remote Work and Work-Life Balance Commitments - LYCORE",
    "description": "How LYCORE runs as a remote-first company, with flexibility expectations and work-life balance commitments for the people who work here. See the arrangement."
  },
  "/contact": {
    "title": "Contact LYCORE for a Free Lead System Review - LYCORE",
    "description": "Contact LYCORE for a free review of how your service business handles calls, website visitors and follow-up. No pressure and no obligation. Send us a message."
  },
  "/data-deletion": {
    "title": "How to Request Data Deletion from LYCORE Apps - LYCORE",
    "description": "Steps to request deletion of personal information or data tied to your account in LYCORE-operated apps and integrations. Find out what to send and where."
  },
  "/faq": {
    "title": "AI Receptionist and Answering Service FAQ - LYCORE",
    "description": "Answers on 24/7 call answering, missed call text back, websites and Google Business Profile, plus how pricing is quoted and what to expect. Read the FAQ."
  },
  "/industries": {
    "title": "Answering Service and Call Handling by Industry - LYCORE",
    "description": "See how LYCORE handles calls, intake, booking and follow-up for plumbers, dentists, law firms, restaurants, towing and other industries. Find your industry."
  },
  "/industries/auto-repair": {
    "title": "Answering Service for Auto Repair Shops and Garages - LYCORE",
    "description": "An answering service for auto repair shops that takes vehicle details, books workshop slots and sends repair updates when you are under a car. See the workflow."
  },
  "/industries/bail-bonds": {
    "title": "Bail Bonds Answering Service for After-Hours Calls - LYCORE",
    "description": "A bail bonds answering service that captures after-hours inquiries and passes them to your agents for callback, so the 2 a.m. call is not lost. See the flow."
  },
  "/industries/restaurants": {
    "title": "Restaurant Answering Service for Phone Orders - LYCORE",
    "description": "A restaurant answering service that handles reservation requests, guest questions and overflow calls when the floor is busy. See how the calls are handled."
  },
  "/industries/spas": {
    "title": "Spa Answering Service and Booking Follow-Up - LYCORE",
    "description": "A spa answering service that takes booking requests, sends appointment reminders and follows up for return visits. See how it fits a spa or wellness studio."
  },
  "/industries/towing": {
    "title": "Towing Company Answering Service for Dispatch - LYCORE",
    "description": "A towing answering service that captures location, vehicle and callback details so your dispatcher gets a ready-to-run job. See what a call looks like."
  },
  "/industries/urgent-care": {
    "title": "Urgent Care Answering Service for Front Desk - LYCORE",
    "description": "An urgent care answering service for non-clinical calls: hours, wait questions and staff handoffs, with clinical questions sent to your team. See how it works."
  },
  "/industries/veterinary": {
    "title": "Veterinary Answering Service and Reminders - LYCORE",
    "description": "A veterinary answering service for non-clinical calls: booking requests, lead response and follow-up, with medical questions passed to your staff. See how."
  },
  "/integrations": {
    "title": "Workflow Integrations for Service Businesses - LYCORE",
    "description": "How LYCORE connects calls, leads and follow-up to the field-service tools, CRMs and automation platforms you use. Connections are checked before a build."
  },
  "/integrations/fieldroutes": {
    "title": "FieldRoutes Workflow Integration for Pest Control - LYCORE",
    "description": "Using FieldRoutes? We check how leads, calls and follow-up can connect to it before a build is agreed. LYCORE is not an official partner of FieldRoutes."
  },
  "/integrations/gohighlevel": {
    "title": "GoHighLevel Workflow Integration for Trades - LYCORE",
    "description": "Using GoHighLevel? We map how calls, leads and customer follow-up can connect to it before a build is agreed. LYCORE is not an official GoHighLevel partner."
  },
  "/integrations/gorilladesk": {
    "title": "GorillaDesk Workflow Integration for Pest Control - LYCORE",
    "description": "Using GorillaDesk for pest control? We check how calls, leads and follow-up can connect to it before a build. LYCORE is not an official GorillaDesk partner."
  },
  "/integrations/housecall-pro": {
    "title": "Housecall Pro Workflow Integration Options - LYCORE",
    "description": "Using Housecall Pro? We check how calls, leads, jobs and customer messages can connect to it before a build. LYCORE is not an official Housecall Pro partner."
  },
  "/integrations/hubspot": {
    "title": "HubSpot Workflow Integration for Lead Follow-Up - LYCORE",
    "description": "Using HubSpot? We check how new leads and customer follow-up can connect to it before a build is agreed. LYCORE is not an official HubSpot partner or reseller."
  },
  "/integrations/jobber": {
    "title": "Jobber Workflow Integration for Service Businesses - LYCORE",
    "description": "Using Jobber? We check how calls, leads, jobs and customer messages can connect to it before a build is agreed. LYCORE is not an official Jobber partner."
  },
  "/integrations/make": {
    "title": "Make Automation Workflow for Service Businesses - LYCORE",
    "description": "Using Make for automation? We design scenarios that connect your calls, leads and follow-up, and check what is possible first. LYCORE is not a Make partner."
  },
  "/integrations/n8n": {
    "title": "n8n Automation Workflow for Service Businesses - LYCORE",
    "description": "Using n8n for automation? We design workflows that connect the approved systems behind your calls and follow-up, and check first. LYCORE is not an n8n partner."
  },
  "/integrations/notion": {
    "title": "Notion Workflow Integration for Service Businesses - LYCORE",
    "description": "Using Notion to document your process? We check how calls and lead details can feed into it before a build is agreed. LYCORE is not an official Notion partner."
  },
  "/integrations/pestpac": {
    "title": "PestPac Workflow Integration for Pest Control - LYCORE",
    "description": "Using PestPac for pest control? We check how calls, leads and follow-up can connect to it before a build is agreed. LYCORE is not an official PestPac partner."
  },
  "/integrations/servicetitan": {
    "title": "ServiceTitan Workflow Integration Options - LYCORE",
    "description": "Using ServiceTitan? We check how calls, leads and the customer lifecycle can connect to it before a build. LYCORE is not an official ServiceTitan partner."
  },
  "/integrations/zapier": {
    "title": "Zapier Automation Workflow for Service Businesses - LYCORE",
    "description": "Using Zapier for automation? We plan simple, maintainable workflows for your calls and follow-up, and check what works first. LYCORE is not a Zapier partner."
  },
  "/privacy-policy": {
    "title": "Privacy Policy: How LYCORE Handles Your Data - LYCORE",
    "description": "How LYCORE GROUP LLC collects, uses, shares, protects and keeps personal information from this website, and how to use your privacy choices. Read the policy."
  },
  "/resources": {
    "title": "Service Business Guides on Calls and Follow-Up - LYCORE",
    "description": "Guides on call response, missed call text back, follow-up, reviews, CRM workflows and automation choices for service business owners. Browse the guides."
  },
  "/resources/ai-receptionist-vs-answering-service": {
    "title": "AI Receptionist vs Answering Service: Which Fits? - LYCORE",
    "description": "AI receptionist vs answering service: a practical comparison for service businesses deciding how to cover after-hours and overflow calls. Read the comparison."
  },
  "/resources/cold-email-infrastructure": {
    "title": "What Cold Email Infrastructure Includes and Limits - LYCORE",
    "description": "A buyer guide to what cold email infrastructure includes, how a responsible outbound setup works, and where deliverability work stops. Read before you buy."
  },
  "/resources/crm-vs-field-service-management": {
    "title": "CRM vs Field Service Management Software Guide - LYCORE",
    "description": "CRM vs field service management software: how to decide which system should own leads, jobs and customer follow-up in your service business. Read the guide."
  },
  "/resources/how-to-stop-missing-calls-small-business": {
    "title": "How to Stop Missing Business Calls: Practical Guide - LYCORE",
    "description": "How to stop missing business calls: find where calls slip through, cover those gaps and follow up fast, with steps you can start today. Read the guide."
  },
  "/resources/is-an-ai-receptionist-worth-it": {
    "title": "Is an AI Receptionist Worth It? A Plain Guide - LYCORE",
    "description": "Is an AI receptionist worth it for your business? A plain way to decide, with the numbers to check and the cases where it is not a fit. Read before you decide."
  },
  "/resources/measuring-lead-generation-results": {
    "title": "How to Measure Lead Generation Results: A Guide - LYCORE",
    "description": "How to measure lead generation results: define bounce rate, positive replies, qualified meetings, response time and booking rate first. Read the guide."
  },
  "/resources/missed-call-text-back": {
    "title": "How Missed Call Text Back Works for Small Business - LYCORE",
    "description": "How missed call text back works: a plain-language guide to a fast SMS reply after an unanswered business call, with opt-out handling. Read how it works."
  },
  "/resources/missed-call-text-back-calculator": {
    "title": "Missed Call Text Back Calculator: Value Estimator - LYCORE",
    "description": "Use the missed call text back calculator to estimate what faster replies to missed calls could be worth, then check the call path behind the estimate."
  },
  "/resources/missed-call-text-back-for-home-services": {
    "title": "Missed Call Text Back for Plumbers, HVAC, Roofers - LYCORE",
    "description": "Missed call text back for plumbers, HVAC and roofers: what the text says, how it goes out after an unanswered call, and what it cannot do. Read the guide."
  },
  "/resources/review-automation": {
    "title": "Review Automation Without Review Gating: A Guide - LYCORE",
    "description": "How review automation works without review gating: a practical guide to asking every customer for an honest review after the job is done. Read the guide."
  },
  "/resources/zapier-vs-n8n": {
    "title": "Zapier vs n8n for Service Business Automation - LYCORE",
    "description": "Zapier vs n8n for service business automation: a neutral comparison of two common approaches to keeping business workflows maintainable. Read the comparison."
  },
  "/services/cold-email-infrastructure": {
    "title": "Cold Email Infrastructure Setup for Service Firms - LYCORE",
    "description": "Cold email infrastructure setup: sending domains, business inboxes, SPF, DKIM and DMARC, plus about two weeks of warm-up before launch checks. Ask for a review."
  },
  "/services/crm-automation": {
    "title": "CRM Automation for Service Businesses and Trades - LYCORE",
    "description": "CRM automation built around the CRM and operational tools your team already uses, so new leads and customers move through follow-up without manual chasing."
  },
  "/services/customer-reactivation": {
    "title": "Customer Reactivation for Service Businesses - LYCORE",
    "description": "Customer reactivation workflows for past customers, dormant leads and recurring-service reminders, with opt-outs respected. Ask how it would work for you."
  },
  "/services/google-business-profile-management": {
    "title": "Google Business Profile Management Service - LYCORE",
    "description": "Google Business Profile management that fixes your phone number, hours, categories and service area so customers who find you on Google can reach you."
  },
  "/services/lead-follow-up": {
    "title": "Lead Follow-Up Automation for Service Businesses - LYCORE",
    "description": "Lead follow-up automation that replies to every inquiry, chases estimates and reminds customers, then hands over to a person when it matters. Book a review."
  },
  "/services/missed-call-text-back": {
    "title": "Missed Call Text Back Service for Contractors - LYCORE",
    "description": "A missed call text back service that texts the caller right after an unanswered call, so the job does not go to the next business on the list. Book a review."
  },
  "/services/outbound-lead-generation": {
    "title": "B2B Outbound Lead Generation for Service Businesses - LYCORE",
    "description": "B2B outbound lead generation: prospect research, cold email outreach, reply qualification and appointment setting for service businesses. Ask for a review."
  },
  "/services/reputation-management": {
    "title": "Reputation Management for Service Businesses - LYCORE",
    "description": "Reputation management with practical review and response workflows, so more happy customers leave honest reviews. Ask for a free look at your review process."
  },
  "/services/review-automation": {
    "title": "Review Automation for Local Service Businesses - LYCORE",
    "description": "Review automation that asks customers for a review after the job, built around your customer journey and never filtered by rating. Ask how it would work."
  },
  "/services/web-design": {
    "title": "Web Design for Contractors and Service Businesses - LYCORE",
    "description": "Web design for contractors: a fast, phone-first site that shows what you do, why to trust you and how to call or book in one tap. Book a free site review."
  },
  "/terms": {
    "title": "Terms of Use for LYCORE Services and Website - LYCORE",
    "description": "The terms covering use of the LYCORE website, our services, third-party tools and the boundaries of what we do. Read them before you use our services."
  },
  "/vision": {
    "title": "Where LYCORE Is Building: Full Business Systems - LYCORE",
    "description": "LYCORE is building toward complete operating systems for service industries: from answered calls to automated paperwork to end-to-end business infrastructure."
  },
  "/what-we-build": {
    "title": "Lead Generation, Web Design and Automation - LYCORE",
    "description": "What LYCORE builds for service businesses: an AI receptionist, lead follow-up, web design, CRM automation and reviews. See what fits your phones and leads."
  },
  "/industries/dentists": {
    "title": "Answering Service for Dentists and Dental Practices - LYCORE"
  },
  "/industries/electrical": {
    "title": "Electrician Answering Service for Contractors - LYCORE",
    "description": "Answering service for electricians: an AI receptionist that answers every call, captures the job and address, and gets urgent electrical calls to you."
  },
  "/industries/home-services": {
    "title": "Answering Service for Contractors and Home Services - LYCORE",
    "description": "Answering service for contractors: a 24/7 AI receptionist that answers every call, captures the job and books it or passes it to you while you work."
  },
  "/industries/locksmiths": {
    "title": "Locksmith Answering Service for Lockout Calls - LYCORE"
  },
  "/industries/med-spas": {
    "title": "Med Spa Answering Service for Consultation Calls - LYCORE"
  },
  "/industries/roofing": {
    "title": "Answering Service for Roofers and Roofing Contractors - LYCORE",
    "description": "Answering service for roofers: an AI receptionist that answers storm-season calls, captures the damage and address, and logs inspection requests for you."
  },
  "/industries/pest-control": {
    "description": "Pest control answering service: an AI receptionist that answers every call, captures the pest and address, and books treatment visits or callbacks for your team."
  },
  "/industries/law-firms": {
    "description": "AI receptionist and answering service for law firms: answers every call, captures contact details and the matter type, and routes it to your intake team."
  },
  "/services/ai-receptionist": {
    "description": "A 24/7 AI receptionist and answering service that answers every call, screens out wrong numbers and sales calls, qualifies real customers and books them."
  },
  "/resources/emergency-answering-service": {
    "title": "Emergency Answering Service: How Urgent Calls Work - LYCORE"
  },
  "/resources/how-much-does-an-answering-service-cost": {
    "title": "How Much Does an Answering Service Cost? - LYCORE"
  }
};

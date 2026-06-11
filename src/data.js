// Default SCP data — used as seed for the JSONBin API on first load
export const SCP_DATA_DEFAULT = [
  {
    id: "SCP-002",
    objectClass: "Euclid",
    nickname: "The Living Room",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camponotus_flavomarginatus_ant.jpg/640px-Camponotus_flavomarginatus_ant.jpg",
    imageCaption: "SCP-002 suspended in its containment facility, Site-19",
    containmentProcedures: [
      "SCP-002 is to be kept in a locked container at all times.",
      "All personnel assigned to SCP-002 must be fitted with remote monitoring devices before entering the containment chamber.",
      "No fewer than two (2) armed guards must be present whenever containment is accessed.",
      "In the event of a power failure, SCP-002's chamber must be immediately evacuated and sealed until power is restored.",
    ],
    description: [
      "A fleshy, tumor-like object resembling a small apartment absorbs living humans and converts them into biological furniture. It requires constant power and strict containment due to its anomalous behavior and danger to personnel.",
    ],
    tags: ["euclid", "biological", "hostile", "organic", "spatial"],
    rating: "+2541",
    addendum: null,
  },
  {
    id: "SCP-003",
    objectClass: "Euclid",
    nickname: "The Biological Motherboard",
    image: null,
    imageCaption: "SCP-003 — visual documentation restricted at this clearance level",
    containmentProcedures: [
      "SCP-003 must be kept at a temperature no lower than 35°C at all times.",
      "Personnel must not allow SCP-003 to come into contact with any biological matter.",
      "In the event of a temperature drop below threshold, emergency heating protocols must be initiated within 90 seconds.",
      "A minimum of two (2) heat sensors must be operational in SCP-003's containment chamber at all times.",
    ],
    description: [
      "Composed of ancient biological components resembling a computer, SCP-003 reacts to temperature drops by growing and mimicking nearby life. It is believed to be sentient and potentially linked to a reality-altering event.",
    ],
    tags: ["euclid", "biological", "sentient", "temperature", "anomalous"],
    rating: "+1987",
    addendum:
      "Addendum 003-1: Following Incident 003-Alpha, ambient temperature monitoring has been upgraded to redundant triple-sensor arrays. SCP-003 exhibited accelerated growth patterns during the power outage of ██/██/████.",
  },
  {
    id: "SCP-004",
    objectClass: "Euclid",
    nickname: "The 12 Rusty Keys and the Door",
    image: null,
    imageCaption: "The anomalous door associated with SCP-004, Site-62 perimeter",
    containmentProcedures: [
      "SCP-004-1 (the door) is to remain in its current location at Site-62.",
      "SCP-004-2 through SCP-004-13 (the keys) are to be stored in a locked container at Site-19.",
      "Under no circumstances are any of the keys to be used on SCP-004-1 without written authorisation from at least two (2) Level 4 personnel.",
      "Any testing involving SCP-004-1 must be conducted using D-Class personnel only.",
    ],
    description: [
      "A set of keys that open a mysterious door, each transporting users to unknown and often deadly dimensions. It causes spatiotemporal anomalies and is linked to secret Foundation activities at Site-62.",
    ],
    tags: ["euclid", "portal", "spatial", "dimensional", "keys"],
    rating: "+2213",
    addendum:
      "Addendum 004-1: Of the twelve keys recovered alongside SCP-004-1, only three have been tested. Two D-Class subjects were lost during testing. One key produced a spatiotemporal anomaly that required a 72-hour containment lockdown at Site-62.",
  },
  {
    id: "SCP-005",
    objectClass: "Safe",
    nickname: "The Skeleton Key",
    image: null,
    imageCaption: "SCP-005 photographed during initial cataloguing — Item 005-Photo-01",
    containmentProcedures: [
      "SCP-005 is to be kept in a locked box within a standard containment locker at Site-19.",
      "Access to SCP-005 requires written approval from a Level 3 or higher security officer.",
      "SCP-005 is not to be used for any purpose outside of approved testing scenarios.",
      "Following each use, SCP-005 must be returned to containment and the incident logged.",
    ],
    description: [
      "An ornate key that can open any lock, SCP-005 is useful but heavily restricted to prevent misuse. Its unusual behavior suggests potential sentience or pattern recognition capabilities.",
    ],
    tags: ["safe", "key", "lock", "mechanical", "sentient"],
    rating: "+1654",
    addendum:
      "Addendum 005-1: SCP-005 has demonstrated an ability to open electronic locks, biometric scanners, and at least one anomalous containment unit. All tests must be pre-approved and conducted under direct supervision.",
  },
  {
    id: "SCP-006",
    objectClass: "Safe",
    nickname: "Fountain of Youth",
    image: null,
    imageCaption: "SCP-006 — photographic documentation withheld per O5 directive",
    containmentProcedures: [
      "SCP-006 is to be kept in a sealed containment chamber at Site-06-3.",
      "All personnel interacting with SCP-006 must wear full hazmat suits and are forbidden from consuming the liquid.",
      "Any personnel who come into contact with SCP-006 must be immediately quarantined and terminated.",
      "The location of SCP-006 is classified at O5 level — unauthorised disclosure is punishable under Foundation Directive 12.",
    ],
    description: [
      "A spring emitting water with remarkable regenerative properties, SCP-006 is kept secret due to its potential impact on human biology. Any exposure to the liquid requires termination and incineration to protect its secrecy.",
    ],
    tags: ["safe", "liquid", "regenerative", "biological", "classified"],
    rating: "+1823",
    addendum: null,
  },
  {
    id: "SCP-008",
    objectClass: "Euclid",
    nickname: "The Zombie Plague",
    image: null,
    imageCaption: "SCP-008 — electron microscopy imagery classified",
    containmentProcedures: [
      "All samples of SCP-008 are to be stored in a hermetically sealed container at all Foundation bio-containment sites.",
      "Any personnel exposed to SCP-008 must be immediately terminated and incinerated.",
      "Research on SCP-008 requires written approval from at least three (3) Level 5 senior staff.",
      "In the event of a containment breach, the entire facility is to be sterilised using protocol Omega-7.",
    ],
    description: [
      "SCP-008 is a complex prion that causes rapid necrosis of brain tissue while maintaining motor function in the host. Infected subjects display extreme aggression, loss of higher cognitive functions, and an overwhelming drive to spread infection through biting. No cure is currently known.",
    ],
    tags: ["euclid", "prion", "infectious", "hostile", "biological"],
    rating: "+3102",
    addendum:
      "Addendum 008-1: Following Incident 008-Gamma, all research samples have been reduced to 0.5ml maximum. Three researchers were lost. Termination protocols are now automated.",
  },
  {
    id: "SCP-012",
    objectClass: "Euclid",
    nickname: "A Bad Composition",
    image: null,
    imageCaption: "SCP-012 — reproduction strictly forbidden",
    containmentProcedures: [
      "SCP-012 must be stored in a light-proof container with no reflective surfaces.",
      "Personnel must not view SCP-012 directly; mirrors or cameras must not be used to observe it.",
      "Any personnel exposed to SCP-012 must be immediately removed from the site and monitored.",
      "Research on SCP-012 is suspended indefinitely following Incident 012-3.",
    ],
    description: [
      "SCP-012 is a piece of musical composition written on dark parchment. Those who view it are driven to complete it, using their own blood as ink. No subject has survived the attempt. The music itself is an incomplete symphony in an unknown key that causes acute suicidal ideation in those who hear it.",
    ],
    tags: ["euclid", "cognitohazard", "musical", "lethal", "memetic"],
    rating: "+2758",
    addendum:
      "Addendum 012-1: SCP-012 has so far claimed fourteen researchers and seven security staff. The composition remains incomplete. Analysis of surviving fragments suggests it was authored sometime in the 17th century.",
  },
  {
    id: "SCP-013",
    objectClass: "Safe",
    nickname: "Blue Lady Cigarettes",
    image: null,
    imageCaption: "SCP-013 — product packaging documentation",
    containmentProcedures: [
      "All remaining packs of SCP-013 are to be stored in a standard containment locker at Site-19.",
      "Female personnel are prohibited from handling SCP-013 without express Level 2 authorisation.",
      "Male personnel are permitted to handle SCP-013 but must log all interactions.",
      "Under no circumstances may SCP-013 be lit or smoked outside of approved testing conditions.",
    ],
    description: [
      "SCP-013 is a pack of 'Blue Lady' brand cigarettes. Any female who smokes one undergoes a gradual physical transformation over 48 hours, eventually becoming an exact replica of a specific unidentified woman. Affected subjects retain their memories but adopt the behaviours and mannerisms of this unknown woman.",
    ],
    tags: ["safe", "cognitohazard", "transformation", "humanoid", "memetic"],
    rating: "+1456",
    addendum:
      "Addendum 013-1: Seventeen women have been transformed to date. All transformed subjects refer to themselves as 'Clara' and claim to remember a life in Paris in the 1920s. The identity of the original 'Clara' remains unknown.",
  },
  {
    id: "SCP-024",
    objectClass: "Euclid",
    nickname: "The Game Show of Death",
    image: null,
    imageCaption: "SCP-024 — aerial observation capture",
    containmentProcedures: [
      "SCP-024 must be secured with magnetically sealed blast doors and reinforced, armored walls to prevent unauthorized entry.",
      "Under no circumstances can any security or research personnel enter SCP-024.",
      "Only D-Class personnel are allowed entry and strictly for research purposes only. All researchers are to observe and experiment with SCP-024 from the remote observation lab.",
    ],
    description: [
      "SCP-024 is an abandoned sound stage that was once owned by █████████. Upon entering SCP-024, visitors are immediately greeted by an anonymous announcer who communicates via intercom and is able to hear and comprehend the voices of people within SCP-024.",
      "The announcer explains that the visitor has entered a competition and must find their way out of SCP-024 within 24 hours. The visitor is then left to navigate a series of rooms, each containing a different challenge or puzzle. Failure to complete a challenge results in the visitor being 'eliminated' from the competition.",
    ],
    tags: ["euclid", "dark", "humanoid", "horror", "contest"],
    rating: "+2024",
    addendum:
      "Addendum 024-1: GPS locator beacons planted on D-Class subjects D-124 through D-135 lost all signal upon 'elimination'. Whether signals were destroyed or subjects transported to an undetectable location remains unknown.",
  },
  {
    id: "SCP-026",
    objectClass: "Keter",
    nickname: "Afterschool Retention",
    image: null,
    imageCaption: "SCP-026 observation capture",
    containmentProcedures: [
      "SCP-026 is to remain securely locked and boarded up at all times when there is no research ongoing.",
      "Alarms are set to alert the Foundation in case of entry by civilians or other agencies.",
    ],
    description: [
      "SCP-026 is a three-story public school building built in ████. It was declared condemned after it was found the floor plan didn't match the building's blueprints.",
      "The building demonstrates severe spatial anomalies. Its internal space is much greater than the external surface would allow. Hallways display variable length, stairways have differing numbers of steps, and the number of rooms changes each time they are counted. Attempts to reach the far ends of the hallways have met with failure thus far.",
    ],
    tags: ["keter", "dark", "horror", "spatial", "dimensional"],
    rating: "+2026",
    addendum:
      "Addendum 026-1: Robotic exploration shows the spatial anomalies are caused by changes in observer perception rather than actual phenomena. Several D-Class personnel have disappeared from Foundation control only to reappear inside the building, claiming to have dreamed of it beforehand.",
  },
  {
    id: "SCP-036",
    objectClass: "Safe",
    nickname: "The Reincarnation Pilgrimage of the Yazidi",
    image: null,
    imageCaption: "SCP-036 observation capture",
    containmentProcedures: [
      "Once every year, a mobile task force is dispatched from Containment Command-02 to Site-22A to defend the runway and airport located there.",
      "The civilian facility is to be cleared of all non-SCP personnel by 0400 hours of September 23 and none are allowed to return until sunrise the next day.",
      "On October 1, all civilians must be evacuated again before sunrise and will not be allowed on to Site-22A until the return of the 'Pilgrimage flight.'",
    ],
    description: [
      "SCP-036 includes Site-22A (a small airport in the Mosul region of northern Iraq) and Site-22B (the destination of departing passengers). Each year on September 23, an unidentified passenger plane arrives carrying people of the Yazidi faith who are confirmed to be individuals who died during the previous year. These 'pilgrims' then board a Foundation-supplied aircraft for a destination that does not appear on satellite imagery.",
    ],
    tags: ["safe", "ritual", "religious", "humanoid", "anomalous"],
    rating: "+2036",
    addendum: null,
  },
  {
    id: "SCP-049",
    objectClass: "Euclid",
    nickname: "The Plague Doctor",
    image: null,
    imageCaption: "SCP-049 photographed during initial containment, Site-19",
    containmentProcedures: [
      "SCP-049 is to be contained in a Standard Secure Humanoid Containment Cell at Site-19.",
      "SCP-049 is not to be removed from its cell without Level 3 authorisation and a full security escort.",
      "Any personnel 'cured' by SCP-049 are to be immediately incinerated; no exceptions.",
      "SCP-049 may be allowed limited interaction with D-Class personnel for research purposes under supervision.",
    ],
    description: [
      "SCP-049 is a humanoid entity that resembles a medieval plague doctor. It believes it is curing a pestilence it calls 'The Pestilence' by killing and reanimating humans as docile, shambling undead. SCP-049 is highly intelligent and communicative, and will cooperate with Foundation staff under most circumstances.",
    ],
    tags: ["euclid", "humanoid", "medical", "undead", "intelligent"],
    rating: "+4521",
    addendum:
      "Addendum 049-1: SCP-049 has requested access to a library and writing materials. Request approved under supervision. It has produced several treatises on 'The Pestilence' which bear no resemblance to any known disease.",
  },
  {
    id: "SCP-055",
    objectClass: "Keter",
    nickname: "Anti-Meme",
    image: null,
    imageCaption: "SCP-055 — documentation impossible by definition",
    containmentProcedures: [
      "SCP-055 is currently uncontained due to the nature of its anomalous properties.",
      "All personnel who interact with SCP-055 must submit written reports immediately after exposure while retaining any partial memory.",
      "No photographic, video, or audio recording of SCP-055 is possible.",
      "Containment protocols are updated on a rolling basis as new information is recovered.",
    ],
    description: [
      "SCP-055 is an anti-memetic object. It cannot be remembered after observation. Personnel can identify what it is NOT (not round, not made of metal, not a living creature) but cannot retain positive characteristics. Due to this property, full documentation of SCP-055 is impossible by definition.",
    ],
    tags: ["keter", "anti-memetic", "cognitohazard", "unknown", "anomalous"],
    rating: "+3890",
    addendum:
      "Addendum 055-1: Dr. ██████ reported that upon extensive testing, SCP-055 is 'definitely not a sphere.' No further attributes have been documented with certainty. Containment is essentially meaningless.",
  },
  {
    id: "SCP-073",
    objectClass: "Euclid",
    nickname: "Cain",
    image: null,
    imageCaption: "SCP-073 during initial interview, Site-17",
    containmentProcedures: [
      "SCP-073 is to be housed in a standard humanoid containment cell with no organic materials in the room.",
      "SCP-073 must not come into direct physical contact with any living plant or organic soil.",
      "SCP-073 is permitted to roam the facility under escort and has been cooperative with Foundation staff.",
      "Any area SCP-073 walks through must be swept for withered plant matter within 24 hours.",
    ],
    description: [
      "SCP-073 is a humanoid male with metallic skin and arm markings. Any organic plant matter he walks on dies instantly. He claims to be the biblical Cain and possesses extensive knowledge of ancient civilisations. SCP-073 is calm, cooperative, and poses no direct physical threat to personnel, though his mere presence causes crop death in a localised radius.",
    ],
    tags: ["euclid", "humanoid", "biblical", "sapient", "anomalous"],
    rating: "+2641",
    addendum:
      "Addendum 073-1: SCP-073 and SCP-076 (Abel) are not to be permitted within visual range of one another under any circumstances. Incident 073/076-A resulted in major structural damage to Site-17 and eleven casualties.",
  },
  {
    id: "SCP-096",
    objectClass: "Euclid",
    nickname: "The Shy Guy",
    image: null,
    imageCaption: "SCP-096 — direct photographic documentation prohibited",
    containmentProcedures: [
      "SCP-096 is to be contained in a 5m x 5m x 5m airtight steel cube at all times.",
      "No visual recording devices are to be used in the containment chamber.",
      "All personnel must wear opaque, full-body suits when near SCP-096's cell.",
      "In the event SCP-096 enters an agitated state, the nearest MTF team must immediately triangulate and retrieve the triggering image.",
    ],
    description: [
      "SCP-096 is a pale, emaciated humanoid entity approximately 2.38m tall. Under normal conditions it is docile and sits in the corner of its cell weeping. However, if any individual views its face — whether directly, in a photograph, or in any visual medium — SCP-096 will enter a state of extreme agitation and pursue that individual across any distance until it reaches and kills them.",
    ],
    tags: ["euclid", "humanoid", "hostile", "lethal", "cognitohazard"],
    rating: "+5102",
    addendum:
      "Addendum 096-1: Following Incident 096-1-A, all images on the internet must be continuously screened for SCP-096's face. A dedicated AI screening system (Procedure Sigma-3) was deployed for this purpose in ████.",
  },
  {
    id: "SCP-173",
    objectClass: "Euclid",
    nickname: "The Sculpture",
    image: null,
    imageCaption: "SCP-173 in containment — do not break eye contact",
    containmentProcedures: [
      "SCP-173 is to be kept in a locked steel chamber at all times.",
      "No fewer than three (3) personnel may enter the containment chamber simultaneously.",
      "All personnel must maintain direct eye contact with SCP-173 at all times while in its presence.",
      "Entrance permissions are to be revoked for any personnel displaying ocular tremors.",
    ],
    description: [
      "SCP-173 is a concrete statue of unknown origin, standing approximately 1.9m tall. It is capable of moving at extreme speeds but only when not within a direct line of sight. It kills by snapping the neck of its victim or strangulation. The brown stains on its surface are a mixture of blood and faecal matter; the origin is unknown. Personnel must not let their gaze leave SCP-173 for any reason.",
    ],
    tags: ["euclid", "statue", "hostile", "lethal", "visual"],
    rating: "+6201",
    addendum: null,
  },
  {
    id: "SCP-343",
    objectClass: "Safe",
    nickname: "God",
    image: null,
    imageCaption: "SCP-343 — visual documentation withheld",
    containmentProcedures: [
      "SCP-343 has agreed to remain in a standard humanoid containment cell of its own volition.",
      "SCP-343 is to be treated with respect and given access to reading materials upon request.",
      "Interviews with SCP-343 require Level 4 clearance and must be conducted in pairs.",
      "SCP-343 is not to be provoked or tested against its will under any circumstances.",
    ],
    description: [
      "SCP-343 is a male humanoid of advanced age who claims to be God. SCP-343 demonstrates the ability to alter reality in ways consistent with this claim, including teleportation, matter creation, and omniscient knowledge of Foundation operations. It remains cooperative and largely benign, expressing a desire to observe humanity and occasionally offer cryptic advice.",
    ],
    tags: ["safe", "humanoid", "reality-altering", "sapient", "divine"],
    rating: "+3445",
    addendum:
      "Addendum 343-1: SCP-343 correctly predicted the containment breaches of SCP-682 and SCP-076 six months before they occurred. It offered no assistance in preventing them, stating only: 'It was necessary.'",
  },
  {
    id: "SCP-500",
    objectClass: "Safe",
    nickname: "Panacea",
    image: null,
    imageCaption: "SCP-500 — current capsule count: 47",
    containmentProcedures: [
      "SCP-500 is to be stored in a standard medical containment locker at Site-19.",
      "Access requires Level 4 clearance and written approval from two (2) senior medical staff.",
      "Capsules may only be administered to cure life-threatening conditions.",
      "Under no circumstances is SCP-500 to be reproduced or synthesised without O5 Council approval.",
    ],
    description: [
      "SCP-500 is a small plastic container containing forty-seven red capsules. Each capsule, when ingested, cures any and all diseases, disorders, or injuries in the host within two hours. There are no known side effects. Attempts to reproduce or reverse-engineer the capsules have failed entirely. The remaining supply is considered irreplaceable.",
    ],
    tags: ["safe", "medical", "curative", "pharmaceutical", "irreplaceable"],
    rating: "+3788",
    addendum:
      "Addendum 500-1: Four capsules have been used since recovery. One to cure SCP-049's first 'patient' (ineffective), one to treat O5-7 during Incident ████, and two during the containment of SCP-682 (also ineffective).",
  },
  {
    id: "SCP-5243",
    objectClass: "Keter",
    nickname: "The Time Loop Catastrophe",
    image: null,
    imageCaption: "SCP-5243 observation capture",
    containmentProcedures: [
      "As SCP-5243 is a recurrent catastrophic containment failure, it is 'contained' through amelioration of its effects.",
    ],
    description: [
      "SCP-5243 is an annual cascade containment breach and unstable time loop occurring in the Acroamatic Abatement, Applied Occultism, and Security and Containment Sections of Site-43.",
      "Dramatic local reality alterations will revive and subsequently terminate deceased Foundation personnel and damage containment apparatus throughout the Site. The stacking of facilities allows waste products from supernatural subjects to proceed vertically from their sources, creating the conditions for catastrophic resonance each year.",
    ],
    tags: ["keter", "temporal", "loop", "reality-altering", "catastrophic"],
    rating: "+530",
    addendum:
      "Addendum 5243-1: At 18:25 hours, Dr. Zlatá was struck by a bolt of light from a ruptured paraspectral grounding conduit and converted to forty-seven half-lemons with bright pink skin and light blue flesh. No timeline alterations occurred.",
  },
  {
    id: "SCP-682",
    objectClass: "Keter",
    nickname: "Hard-to-Destroy Reptile",
    image: null,
    imageCaption: "SCP-682 during early containment attempts, Site-19",
    containmentProcedures: [
      "SCP-682 must be destroyed as soon as possible.",
      "SCP-682 is to be contained in a 5m x 5m x 5m acid bath enclosure at all times.",
      "Containment must be reinforced with at least 25cm of reinforced steel.",
      "In the event of a containment breach, all on-site personnel are to follow evacuation procedure Omega-Red immediately.",
    ],
    description: [
      "SCP-682 is a large reptilian creature of unknown origin. It appears to have a hatred of all life and will attack and consume any living thing it encounters. SCP-682 has proven nearly impossible to destroy; it regenerates from almost any damage and has adapted to every termination method attempted, including nuclear bombardment, antimatter exposure, and exposure to SCP-409.",
    ],
    tags: ["keter", "reptile", "hostile", "regenerative", "lethal"],
    rating: "+6789",
    addendum:
      "Addendum 682-1: SCP-682 has been exposed to SCP-173, SCP-096, SCP-343, and SCP-500 in termination attempts. All have failed. O5-Command has authorised research into XK-Class end-of-world scenarios as a last resort.",
  },
];

export const CLASS_CONFIG = {
  Safe:   { color: "#00ff88", bg: "rgba(0,255,136,0.1)",  border: "rgba(0,255,136,0.4)" },
  Euclid: { color: "#ffd700", bg: "rgba(255,215,0,0.1)",  border: "rgba(255,215,0,0.4)" },
  Keter:  { color: "#ff3333", bg: "rgba(255,51,51,0.1)",  border: "rgba(255,51,51,0.4)" },
};

# XT-2-challenge-2
geanimeerde klok in css opdracht
Hoofdpijn, de sequel.

Het was een pittige uitdaging om dit alles werkend te krijgen.
Het is een simpel ontwerp maar ben er een hoop tijd aan kwijt geraakt. 
Het idee was om de klok als zon of maan te hebben, maar dit heb ik later aangepast door de 
slechte combi van wit op geel en dat het niet echt op een goede maan lijkt naar geel en 
oranje als de “night mode” variant. De volken vliegen nog rond als een weerapp idee en met
een flinke hoeveelheid aan moeite zijn er zelfs sterren ontstaan die willekeurig genegereerd 
worden op basis van de maat van de viewport. De klok en de wolken hebben een positie met 
percentages relatief aan de browder viewport ook waardoor het scale-baar is zonder het gebruik 
van de media queries die een simpele site als dit een hakkerig uiterlijk zouden geven. Het idee
van een media querie zit wel toegepast ophet dag/nacht verhaal waarbij ik met javascript het 
class element “night” aan de body toevoeg na 8 uur savonds en voor 8 uur sochtends. Op deze
manier is er een automatische switch die het mogelijk maakt 2 verschillende uiterlijken te 
maken in css. Dan hoef ik daarvoor niet meer naar js te kijken.

Met een automatisch genererende math.random maak ik de sterren op een willekeurige plek op het scherm.
In de eerste iteratie, wanneer het nacht was, gaf hij dus ook constant een disco idee doordat hij na 
8 uur elke seconde de “night” class opnieuw op de body gooide en opnieuw de functie van sterrenmaken 
opriep met de math.random. Dit kan ook een extra effect hebben. Ik heb een comment line gezet boven de 
disco functie, als die regel in een comment getoverd wordt dan begint de disco weer als van ouds.

var bayes = require("bayes");

var classifier = bayes();

classifier.learn("Fuck em all. They only pussy niggas shootin at the star", "real");
classifier.learn("I don't know if you know, but I know who you are. You could be big as Madonna. Just get in the car and let's touch the road", "saving women");
classifier.learn("Man I told my city I'd be gone till November, then November came, then I came right back on my worst behav", "got the juice");
classifier.learn("Had a job sellin Girbaud jeans. I had a yellow TechnoMarine. Then Kanye dropped, it was polos and backpacks", "started from the bottom");
classifier.learn("Fuck that nigga that you love so bad. I know you still think about the times we had", "saving women");
classifier.learn("I'm about to say a true thing I'm about to say a true thing. You was poppin back when Usher wore a U-chaaaain Goddamn, you changed", "got the juice'");
classifier.learn("I been had these visions of the life I'm livin since I was Jimmy. All I had to do was just go and get it", "started from the bottom");
classifier.learn("Doing is one thing. Doing it right is a whole different story", "I got the juice");
classifier.learn("You’re young so have fun girl. But I hope it’s worth it. Cause fuck it, I’m not here to judge Fuck it, I’m not here to love", "saving women");
classifier.learn("I realize I waited too long, but please don't move on. You don't need no one else.", "miss you");
classifier.learn("The way you got your hair up. Did you forget? That's me", "miss you");
classifier.learn("I never said it'd be fair/But when you're all alone, I hope you truly know how bad I want to be there.", "miss you");
classifier.learn("I better find your loving, I better find your heart/I bet if I give all my love, then nothing's going to tear us apart.", "love");
classifier.learn("They keep telling me don't save you. If I ignore all that advice, and something isn't right. Then who will I complain to?", "saving women");
classifier.learn("What happened between us that night? It always seems to trouble me.", "miss you");
classifier.learn("You telling me it's only been a couple other people that you've been with/I'ma trust you, I'ma give you the benefit of the doubt.", "saving women");
classifier.learn("I'm going through her phone if she goes to the bathroom and her purse right there. I don't trust these hoes, at all.", "trust issues");
classifier.learn("I'm just hittin my pinnacle, you and pussy identical/You like the fucking finish line, we can’t wait to run into you", "real");
classifier.learn("Roll up in that thing, got hoes like Prince, but they know I'm king", "real");
classifier.learn("And shawty wanna party, so don't let yo' girl up out the house. Or there'll be shots on TMZ of me givin' her mouth-to-mouth", "real");
classifier.learn("I’m hearing all of the jokes, I know that they tryna push me, I know that showing emotion don’t ever mean I’m a pussy.", "real");
classifier.learn("I be with my nigga Chubbs, he in love with street shit, No wonder why I feel awkward at this fashion week shit,", "real");
classifier.learn("When you see your enemy somewhere in the club and you realise. He just not in a position to reciprocate your energy", "real");
classifier.learn("Cry if you need to, but I can't stay to watch you, that's the wrong thing to do.", "real");

module.exports = classifier;

# Heat Island Tracker
_For context: an "urban heat island" refers to how a city heats up significantly more compared to surrounding areas because buildings and infrastructure absorb and re-emit large amounts of heat._

## What inspired us to make this specific project?
Only **one** of us knew what urban heat islands even were before this hackathon. We think what drew us to talking about urban heat islands in particular is that it wasn't a commonly focused on issue, yet it still severely affected marginalized communities, especially considering climate change.

The idea of making a website for local organizations to use felt like it was developed on a whim, yet we never treated it that way. Everyone contributed to the solution based on their experience and knowledge, and we all felt the energy that this was worth our time. The team wanted to work on it because we loved the idea, so why dig somewhere else if we already struck gold?

## What does our application do?
We devised that our solutions when addressing urban heat islands would be split into two groups: **short-term** and **long-term**. Short-term solutions would include, for example, sending medical assistance to an elderly care center experiencing extreme heat. Long-term ones would be more structural in nature, and includes solutions like planting more in the region, building better infrastructure, or even simply painting buildings a different color if applicable!

Local NGOs or municipalities would have access to this application, and can use it to share information for **where exactly help is needed** and **how it's needed**.

To serve that need, our application is comprised of two main components:

- A **message board** that tracks what, where, and how aid is needed, and allows you to contact NGOs with a simple click!
- A complementary **map** showing their locations alongside a heatmap with temperature data in the region

## What tools did you use to build it?
We are using **React** as a baseline for our website, but **Mantine** is the backbone for the UI/UX side. Additionally, **Mapbox** powers our map and **Twilio** powers our message board and SMS service.

## How was the journey of building it?
_Long, full of errors and frustration, but ultimately rewarding_. See the next section for more details.

## What challenges did you run into?
For one, we didn't have much collective experience in JavaScript or React, so we had to learn a lot of it as we went along and implement features to the best of our knowledge. We worked with a lot of new packages we weren't familiar with.

Additionally, figuring out how exactly we should implement our map had to be the hardest part, feature-wise. We had to find an API for the map that can work with data that we can access and modify if necessary. Tacking onto this problem was the lack of public data concerning urban heat islands, which took us hours to find.

Implementing Twilio was difficult but doable in the final hours of the hackathon.

## What are you proud of with this project?
We're proud of the front-end and general visual design we've incorporated, making every component and feature feel intentional and baked in properly. We also love the way we've implemented the map with overlayed information, since that took the longest and required so much fiddling with JSON and APIs.

## What did you learn?
We learned how to properly use React in a real life project, and that implementing a web application like this requires a lot of moving components that must be kept track of and properly implemented. We also stretched our web design legs here and found what goes into a cohesive user experience.

## What future is in store for this project?
We can ensure that every feature we want is implemented into the project properly, and expand it to include more features about local issues pertaining to climate change, such as infrastructure and immediate aid with floods on coastal cities!

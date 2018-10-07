---
title: "LED Badges — PCB design"
date: 2018-05-17T20:00:00-05:00
draft: false
---

I've been attempting to design my own PCBs for the badges.

Using the same machine I engrave the acrylic with, I can engrave copper boards to create traces and drill holes. It seems to struggle with 10mil traces but the 20mil traces pictured below all look fully intact.

{{<img "BoardTop.jpg">}}
{{<img "BoardBottom.jpg">}}

Now that I have boards that seem like they should work, I need to order the parts. My current part list includes:

* ATTINY85-20SU &mdash; the main controller (might be possible to use an ATtiny45 for cost saving, there's enough RAM and storage if I don't add any sound reactive features)
* MCP73831T-2ATI/OT &mdash; charging regulator for the lithium battery
* 4.7µF 0805 capacitor &mdash; decoupling USB power in for charger
* 4.99kΩ 0805 resistor &mdash; program charging regulator to 200mA
* Micro USB female connector &mdash; provide power to the charging regulator
* JST-PH 2 pin right angle connector &mdash; solderless battery connection
* 350mAh 652030 lithium polymer battery &mdash; the battery to power it

I already have the pushbutton and toggle switches from previous projects.

I also need to get a SOIC socket so I can program the ATtinys as the boards don't have space for programming headers.

<table>
    <thead>
        <tr>
            <th>Component</th>
            <th>Count</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>ATtiny85-20SU</th>
            <td>15</td>
            <td>$16.93</td>
        </tr>
        <tr>
            <th>MCP73831T-2ATI/OT</th>
            <td>10</td>
            <td>$5.21</td>
        </tr>
        <tr>
            <th>652030 350mAh battery</th>
            <td>2</td>
            <td>$11.98</td>
        </tr>
        <tr>
            <th>4.7µF capacitor</th>
            <td>25</td>
            <td>$1.24</td>
        </tr>
        <tr>
            <th>4.99kΩ resistor</th>
            <td>250</td>
            <td>$1.60</td>
        </tr>
        <tr>
            <th>Micro USB connector</th>
            <td>10</td>
            <td>$5.79</td>
        </tr>
        <tr>
            <th>JST-PH 2-pin connector</th>
            <td>10</td>
            <td>$6.80</td>
        </tr>
        <tr>
            <th>SOIC socket</th>
            <td>1</td>
            <td>$7.98</td>
        </tr>
    </tbody>
</table>

**Total: $57.53** (before shipping and tax)

{{<img "BadgeBoard.png">}}

After getting the parts, I can evaluate how difficult everything is to hand solder. If I can't reliably make good connections, I'll have to look into hot air rework stations, solder paste, and solder masks. With those tools I could place everything and use the hot air to solder parts together instead of having to manually align and apply solder to each tiny pad. However, they can be expensive and difficult to get correct.

In addition to board design, some cheap electret microphone and amplifier boards I ordered arrived today. I'm using them to experiment with sound reactive features. I've started working with some example code to get a feel for how well they work. From the little time I've played with them, it feels more like a stretch goal rather than a core feature.

The components were purchased from Amazon, Arrow, and Adafruit. Most items are expected to arrive by Monday, May 21st. However, the JST connectors from Adafruit may take longer but they are not essential to prototyping.

Next up: waiting for the components to arrive and assembling a test board.

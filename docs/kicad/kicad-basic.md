---
sidebar_position: 2
---
 
# Intro to KiCAD Basic Tutorial
 
## Installation
 
Download and install KiCAD from <https://www.kicad.org/>
 
## Schematic
 
Open KiCAD and start a new project. Once the project is created, open the schematic of the project. Here is where you’ll draw the electronics schematic for your project.
 
![](/img/docs/kicad/kicad-basic-screen.png)
 
In this tutorial, we are going to create a simple circuit that consists of a NPN transistor driving a LED.
 
First, let’s add some component symbols to your schematic.
 
Click on the **Add a symbol** icon ![](/img/docs/kicad/kicad-basic-symbol.png) or <kbd>A</kbd> on your keyboard. Filter for **R** for the resistor and select the standard resistor symbol.
 
![](/img/docs/kicad/kicad-basic-resistor.png)
 
Click **OK** then place it onto your schematic.
 
![](/img/docs/kicad/kicad-basic-resistor-sch.png)
 
You can zoom into your schematic using your mouse wheel or the zoom in and zoom out button.
 
![](/img/docs/kicad/kicad-basic-zoom.png)
 
Repeat adding a second resistor and a LED in the schematic. Since most resistors and LEDs only have two leads, we can use the standard component symbol.
 
> **Tips:** You can duplicate a symbol by highlighting it and press <kbd>Ctrl</kbd> + <kbd>D</kbd> on your keyboard.
 
> **Tips:** When you are in symbol adding mode, you can just left-click anywhere on the schematic and not having to click the **Add a symbol** button to add the next symbol.
 
Next, we'll add a NPN transistor to our circuit. NPN transistors have several configurations depending on the pin arrangement. For our design, we'll be using a BC846/7/8 series transistor ([datasheet](https://www.onsemi.com/pdf/datasheet/bc846alt1-d.pdf)). As per the datasheet, the pins configuration is pin 1 = Base, pin 2 = Emitter, pin 3 = Collector. Therefore, we'll select the **Q_NPN_BEC** symbol.
 
![](/img/docs/kicad/kicad-basic-npn-bec.png)
 
Click **OK** then place it onto your schematic.
 
Next, we'll add a 3-pin connector so our circuit can be connected to other electronics devices using jumper cables or wires. There are various 1x3 connector symbols that you can use by one we prefer is the **Conn_01x03** symbol.
 
![](/img/docs/kicad/kicad-basic-conn-1x3.png)
 
Click **OK** then place it onto your schematic.
 
Before we start connecting all the symbols together, we'll add some power symbols to identify the V<sub>cc</sub> and GND of our circuit. Click on the **Add a power port** icon ![](/img/docs/kicad/kicad-basic-power.png) or <kbd>P</kbd> on your keyboard. Filter for **VCC** and add two VCC symbols. Next, Filter for **GND** and add two GND symbols.

Rearrange the symbols so they are similar to the diagram below.

> **Tips:** Use <kbd>Esc</kbd> on your keyboard to exit the current edit mode or cancel any edit command.

> **Tips:** Rotate a symbol by right-click on the symbol and select Rotate Counterclockwise or <kbd>R</kbd>.

> **Tips:** Move a symbol by clicking on it once then click and drag. Alternatively, you can right-click on the symbol and select Move or use the keyboard shortcut <kbd>M</kbd>.

> **Tips:** Flip a symbol by right-click on the symbol and select Mirror Vertically <kbd>Y</kbd> or Mirror Horizontally <kbd>X</kbd>.

> **Tips:** Rotate a symbol by right-click on the symbol and select Rotate Counterclockwise or <kbd>R</kbd>.

![](/img/docs/kicad/kicad-basic-schematic-no-wire.png)

Lastly, we'll connect all the components together. Click on the **Add a wire** icon ![](/img/docs/kicad/kicad-basic-wire.png) or <kbd>W</kbd> on your keyboard.

At each component, unconnected nodes are identified by a small circle at each lead.

![](/img/docs/kicad/kicad-basic-unconnected-node.png)

Connect all the nodes using the wire tool to complete the circuit.

![](/img/docs/kicad/kicad-basic-schematic-with-wire.png)

Our circuit is now completed but we still need to add component value for the resistors. Right-click on each of the resistor and select **Edit Value** or left-click on over each of the resistors then press <kbd>V</kbd> on your keyboard.

![](/img/docs/kicad/kicad-basic-edit-value.png)

Once drafting of the circuit is done, we'll move onto add annotations to the circuit components, such as R1, D1, etc. Go to **Tools > Annotate Schematic** to open the annotation menu.

![](/img/docs/kicad/kicad-basic-annotations.png)

You can keep all the default settings then click **Annotate** then **Close** the menu. All the components in the schematic should now have numbering.

![](/img/docs/kicad/kicad-basic-schematic-with-annotations.png)

The last step before we can move onto working with the PCB layout is assigning footprint to each component symbol in the schematic. Assignment of footprint will require us knowing or having a very good idea of which physical component we are going to use in our circuit because electronics components such as resistor, LED, transistor come in different shapes and sizes. For some of the common components, you might not need to know the exact parts number at this point, but for more application specific components such as sensor, you might want the parts number handy so you won't choose the wrong footprint for your design. Go to **Tools > Assign Footprints**.

![](/img/docs/kicad/kicad-basic-assign.png)

In the **Assign Footprints** window, you'll see three columns. The colum on the left is where you'll find all your Footprint Libraries. The centre column is a list of all the components in your schematic. The column on the right is a list of footprints from the library you select that you can assign to the components in the centre column.

First, we'll assign a surface mount LED with a size specification of 0603 to the component D1. Scroll down to the **LED_SMD** library then select component **D1** then double-click on the **LED_SMD:LED_0603...HandSolder** foorprint. We are choosing the hand solder version of the footprint because we'll most likely hand solder on the SMD component during prototyping.

> **Tips** You can right-click on the footprint to see a preview of it.

Replace the process to assign footprints to the components as per the following table:

|Symbol|Footprint Library|Footprint|
|---|---|---|
|D1|LED_SMD|LED_0603...HandSolder|
|J1|Connector_JST|JST_PH_B3B-PH-SM4...|
|Q1|Package_TO_SOT_SMD|SOT-23|
|R1|Resistor_SMD|R_0603...HandSolder|
|R2|Resistor_SMD|R_0603...HandSolder|


## Board Layout

After everything from the schematic is set, we are ready for the board layout. Open the PCB file in your project or click on the PCB editor icon ![](/img/docs/kicad/kicad-basic-pcb-editor-icon.png) from the Schematic Editor.

![](/img/docs/kicad/kicad-basic-pcb-editor.png)

The PCB editor might seems very imtimitating at first but there are only a few area that you have to worry about for simple PCB design. There is the:
* (1) The board area - this is where you will place the component and draw you PCB.
* (2) The tool column - this is where you can find the majority of the tools that you'll need.
* (3) The Layers panel - this is where you can toggle the on/off visibility of various layers of you PCB design.

The first thing that we'll need to do is populate the drawing with the components from the schematics. Go to **Tools > Update PCB from Schematic** or press <kbd>F8</kbd> on your keyboard. After you opened the **Update PCB from Schemetic** window, click **Update PCB** then **Close**.

![](/img/docs/kicad/kicad-basic-update-pcb.png)
# BagashApp
#### Video Demo:  <(https://youtu.be/EL2VhzJwr-U)>
#### Description:

BagashApp is a web application developed to facilitate cross-border shopping between Argentina and Uruguay. It allows users to quickly convert prices between Argentine Pesos (ARG) and Uruguayan Pesos (UYU) based on the actual dollar exchange rates they buy/sell. The main goal is to help users compare prices accurately and make informed purchasing decisions.

### Features

1. **Currency Conversion**:
   - Users can input the amount in either Argentine Pesos or Uruguayan Pesos.
   - The application allows users to switch between converting from ARG to UYU and vice versa.
   - It supports the input of the buying and selling rates of the dollar to ensure accurate conversions.

2. **Buying Mode Toggle**:
   - Users can specify whether they are buying in Argentina or Uruguay.
   - The interface updates dynamically based on the selected buying mode.

3. **Conversion History**:
   - The application saves each conversion in the local storage.
   - Users can view a history of their conversions, including the date and time, amounts converted, and the exchange rates used.
   - Users can delete individual entries from the conversion history.

4. **Responsive Design**:
   - The application is designed to be responsive and works well on both desktop and mobile devices.

### Files

1. **index.html**:
   - Contains the structure of the web application.
   - Includes input fields for the amount to be converted, dollar buying rate, and dollar selling rate.
   - Includes buttons for switching conversion modes and toggling buying mode.
   - Displays the conversion result and history.

2. **styles.css**:
   - Contains the styling for the application.
   - Ensures a clean and user-friendly interface.

3. **convert.js**:
   - Contains the JavaScript code for the application's functionality.
   - Handles the conversion logic based on user inputs and selected modes.
   - Manages the conversion history by saving and retrieving data from local storage.
   - Updates the DOM dynamically to reflect the current state of the application.

### Design Choices

1. **User Interface**:
   - The UI is designed to be simple and intuitive. Clear labels and instructions guide the user through the conversion process.
   - The toggle switches and buttons are designed to provide immediate visual feedback, enhancing user experience.

2. **Local Storage**:
   - Conversion history is stored in the browser's local storage to provide persistent data across sessions.
   - This choice ensures that users can revisit their previous conversions without the need for a backend server.

3. **Responsive Design**:
   - The application uses responsive design principles to ensure usability on various devices.
   - CSS media queries and flexible layout techniques are used to adapt the interface for different screen sizes.


BagashApp aims to be a reliable tool for anyone needing quick and accurate currency conversions between Argentine Pesos and Uruguayan Pesos. Whether you're shopping locally or planning a trip, BagashApp has you covered.

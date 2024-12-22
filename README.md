# KurasaContactsApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.



#### **Overview**
This Angular application is a comprehensive contact management tool that allows users to perform CRUD (Create, Read, Update, Delete) operations on contacts. It provides features like a dynamic search bar, customizable views, dark mode, and import/export capabilities. 

The application is designed for seamless user experience with a responsive interface built using Tailwind CSS.


#### **Project Setup**
1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd angular-contacts-app
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the development server:
   ```bash
   ng serve
   ```
   The app will be available at [http://localhost:4200](http://localhost:4200).

4. **Build for Production**
   Create a production-ready build:
   ```bash
   ng build --prod
   ```


#### **Core Features**
1. **List All Contacts**
   - Displays all contacts sorted alphabetically by default.
   - Provides a toggle to switch between grid view and list view for user convenience.

2. **View a Single Contact**
   - Clicking on a contact opens a detailed view page.
   - Fields include:
     - First Name, Last Name
     - Email, Phone Number
     - Contact Image
     - Physical Address

3. **Edit and Update a Contact**
   - Users can edit contact details and save changes.
   - Inline form validation ensures data integrity:
     - Valid email format.
     - Proper phone number length.

4. **Delete a Contact**
   - Users can delete a contact with a confirmation dialog.
   - Supports "soft delete" functionality (marks as deleted instead of permanent removal).

5. **Search Contacts**
   - A dynamic search bar filters contacts as the user types.
   - Supports searching by name, email, or phone number.

6. **Bulk Deletion**
   - Select multiple contacts using checkboxes and delete them in bulk.

7. **Homepage Toggle (List or Grid View)**
   - Users can set a preferred default view (list or grid).
   - Preferences are saved using local storage for persistence.

8. **Favorites**
   - Mark contacts as favorites with a star icon toggle.
   - Favorites are displayed in a separate section for quick access.

9. **Import/Export Contacts**
   - Import contacts from a CSV file.
   - Export the contact list for backup or sharing.
   - Provides instructions and sample CSV templates for users.

10. **Dark Mode**
    - Toggle between light and dark themes.
    - Built using Tailwind CSS's dark mode configuration.


#### **Additional Configuration**
- **Tailwind CSS**: The app uses Tailwind for styling. Ensure it's correctly configured for your Angular project.
- **Local Storage**: User preferences like view settings and dark mode are stored locally for a personalized experience.


#### **Future Enhancements**
- Integration with backend APIs for persistent data storage.
- Support for contact categorization and tagging.
- Improved accessibility features (ARIA roles and keyboard navigation).

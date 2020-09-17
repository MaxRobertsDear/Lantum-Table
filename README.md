 
<h1 align="center">Lantum's joyful data table</h1>
 
 Lantum's joyful data table provides Locum's easy access to the appropriate and available job postings in their area.

## 🤔 Assumptions
1. Users will likely be viewing the app on their phone. Therefore mobile-first design is the approach taken.
2. Pagination for improved UX (faster loading and easier navigation) - assume 10 rows per page.
3. Filtering options for improved UX (easier to find the relevant data) - reach goal.
4. Data will be ordered by data, by default.
5. For the purposes of this task, I am assuming that the user is already logged in.

## ⏰ If I had more time 
### For the task
- Would replace all type `any` with appropriate interfaces
- Would add more tests for more effective regression detection
- Would order the data by date

### Real world scenario
- Would work with BE team to develop api that accepts query params (to only fetch data that is relevant to the user and matches their `staffType`, along with any other filters) and / or explore GraphQL 
- Would add authentication so that the table is only viewable by licensed professionals
- Would work with the design team to elevate the UI and UX of the table (e.g. branding, adding/removing features based on user feedback, etc.)


## 🚀 Getting Started
 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
 
###  🎓 Prerequisites
 
1. Install VSCode (or your preferred IDE), [Node V10+](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/)
 
### 💻 Developing
 
2. Clone this repository.
3. Run `yarn install` to ensure dependencies are up to date.
4. Run `yarn start` to open your default browser with the running application.
 
 
 
### ❗ Running the Tests
 
To run unit and integration test
 
```yarn test```
 
 
 
 
 
 
 
 
 


# Rocketmiles-Application

There is many different tools and strategies for API testing available. I decided to use Postman's built in automated 
API testing. I created my own collection that contains a pubic/stable POST and GET request.

I created a access token within Postmans cloud service for my collection to allow us to run our tests by just pointing 
to our collection via postman url (Method 2)

I also generated test reports in html format found under Rocketmiles-Application/Test Results/. Once you download the
solution you should be able to view these reports in your browser.

Installations/Setup:
- Download Node.js for your platform (You can donwload it from here --> https://nodejs.org/en/download/)
- Install Newman using NPM. If you installed Node.js above, it has NPM installed.
   - Run the following command in console --> npm install -g newman

How to Run Solution:

There is 2 ways two run the solution:

Method 1 (Download solution locally and run tests):
- Download my master branch to your local computer --> https://github.com/mpatel93/Rocketmiles-Application
- Run the following command in console --> newman run location/to/Milan_Postman_Rocketmiles_API_Tests.json
- Test results should be outputted on console

Method 2 (Simply run tests by pointing to my solution hosted on Postman API Cloud Service):
- newman run https://www.getpostman.com/collections/8fd3eb4019c5ee7ae3e9
- Test results should be outputted on console
  

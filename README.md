# TDX 23 LWC hack
This is the mini hack asked to solve in TDX 23. All the code reside here can be found on this repo as well. https://github.com/developerforce/tdx23-lwc-hack.
Here I just added the solution of the requirement asked to solve.

## Add filters to a plant tracker

While having plants at home is lovely and helps fight climate change, taking care of plants can be sometimes hard. That’s why this repo contains an app that allows users to keep track of their plants and the care that they need in Salesforce. Let’s become greener 🌿!

Here comes your challenge! The list of species in the system can be long, and the user experience team has suggested that you, our awesome developer, add an input that allows filtering them.

Pre-work

To complete this mini hack, you can use any org of your choice. If you don’t have an org, request one here.

1. execete this shell script.
```
./setup.sh
```

Check everything is fine by opening the app called “My Plants”, going to the “Species Explorer” tab, and verifying you see this:

## Requirements

The business requirement says _“When a user types a value on a filter input, the speciesList component will show plants which `Name` or `Description__c` contains the typed value”_. There are two conditions indicated:

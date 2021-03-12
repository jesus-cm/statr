# Statr

Statr is a simple app state manager, thought to be used in frontend or Node projects.
It is framework agnostic, so it can be used with React, Angular, WebComponents, express or anything else.

##### See examples on github for every framework at 
https://github.com/jesus-cm/statr


### Import
**Typescript**
import Statr from 'statr'

**Javascript**
const Statr = require('statr').default

### Usage

Statr can store several "stores", to save the state for any store just call:
    *Statr.setState('store_name', dataToStore);*
    
To execute an action whenever a state changes, just have to subscribe to the store changes:
    *Statr.onStateChange('store_name').subscribe(data => {});*
    
The first time that a component is subscribed, it receives the state in that moment, and whenever the 
state is updated, the function passed to subscribe method is called

    

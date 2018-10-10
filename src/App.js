
import * as h from 'react-hyperscript-helpers';
//import { span } from 'react-hyperscript-helpers';

const App = ({name}) =>
{
    return h.span("Hello " + name + "!")
//    return span("Hello " + name + "!")
//    return span(`Hello ${name}!`)
}

export default App;

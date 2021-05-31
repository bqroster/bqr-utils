### Install

```
npm install bqroster-utils --save
```

### Usage
```javascript
import { isArray, isEmpty } from 'bqr-utils';

if (isArray(anyElement)) { // code here }
else if (!isEmpty(anyElement)) { // code here }
```

```javascript
import Utils from 'bqr-utils';

if (Utils.isArray(anyElement)) { // code here }
else if (!Utils.isEmpty(anyElement)) { // code here }
```

### List of Utils functions

##### isNull
```markdown
__True__, if value is different from `null`, `undefined` and `NaN`
```

##### isArray
```markdown
__True__, if value is an Array
```

##### isEmpty
```markdown
__True__, if value does not have content regardless of the value type String, Array or Object('' or [], {})
```

##### isFunction
```markdown
__True__, if value is a function, regardless function anonymous, named or arrow function.
```

##### isObject
```markdown
__True__, if value is an object, regardless is empty or with keys.
```

##### uuid
```markdown
Generates a basic uuid version 4
```

##### uuidXS
```markdown
Generates an 8 digits random value
```

##### isDeleteBackward
```markdown
__true__, if InputEvent is `Delete Backward` input
```

##### capitalize
```markdown
Uppercase the first char of the passed value
```

#### Author
Jose Burgos <jose@bqroster.com>
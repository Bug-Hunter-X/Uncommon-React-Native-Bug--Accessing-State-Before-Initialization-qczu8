This code demonstrates the bug:

```javascript
// Bug.js
import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  //Bug: Accessing count before initialization
  console.log(count); //undefined

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MyComponent;
```

Here's the solution:

```javascript
//BugSolution.js
import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Solution: Using optional chaining
  console.log(count);

  return (
    <View>
      <Text>Count: {count ?? 0}</Text> {/* Nullish coalescing */}
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MyComponent;
```
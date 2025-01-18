# Uncommon React Native Bug: Accessing State Before Initialization

This repository demonstrates a common yet subtle bug in React Native: attempting to access a state variable before it has been initialized.  This often manifests as unexpected behavior or crashes, particularly in functional components during the initial render.

## Bug Description

The bug occurs when a state variable is accessed within a component's body before the component has had a chance to mount and initialize its state.  This usually results in the state variable being `undefined`, leading to errors or unexpected rendering.

## Solution

The solution involves using optional chaining or nullish coalescing to safely access the state variable. This ensures that if the state hasn't been initialized yet, a default value is used, preventing crashes or unexpected behavior.
# IMPORTANT!
## Wait for VSCode to finish setting up dependencies

1. Once VSCode opens for the first time you should briefly see the following in the terminal. 
![](startupImages/1st_step.png)

2. Then it should quickly change to following and will run for a few minutes.
![](startupImages/2nd_step.png)

3. Once packages and dependencies required for the project are all installed, you will see the following for a brief moment:
![](startupImages/3rd_step.png)


4. Then it should change to this, indicating the Editor is ready to use:
![](startupImages/4th_step.png)

## Launch Test Suite.

1. Open App Menu by clicking Burger Icon in Top Left corner:
![](startupImages/5th_step.png)

2. Find and open Command Pallet:
![](startupImages/6th_step.png)

3. Once Command Pallete opened type in "jest" and select "Jest: Start All Runners":
![](startupImages/7th_step.png)

4. You should notice new Test View in Activity Bar on a left land side. Click on it:
![](startupImages/8th_step.png)

4. Once expanded, click "Run all tests" action:
![](startupImages/9th_step.png)

5. You shoul see the results of running tests similar to this:
![](startupImages/10th_step.png)

## Exersize 

1. Open src/MyClassComponent.js file
2. Implement all Steps Required
    - Step 1: Implement react hook method called useEffect(). Once useEffect() is triggered, log 'Component mounted/updated!' to the console.
    - Step 2: Replace X in <p>You clicked X times</p> with JavaScript expression rendering 'count'.
    - Step 3: Add a button named Click me just below <p>You clicked...</p> paragraph. onClick of the button 'handleClick' method should be called.
    - Step 4: Increment variable count by 1 and set it's state by calling setCount(...) method.
3. Make sure All tests passes.
![](startupImages/tests_passing.png)

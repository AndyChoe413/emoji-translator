# Emoji Translator

> In this project, we'll work with HTML `input` elements in the form of text inputs and radio check buttons. In our finished application, the user will type something into the input box, select one of the options from the radio buttons, then click 'submit'. Depending on the selected radio button, some kind of result will be calculated and displayed back to the user underneath.

## A Walkthrough

#### The Basic Structure

* The first step is to query the submit button on our page. You can use its ID for this.
* Add an event listener function to it. You could do this as an anonymous inline function or a named function. But the important thing is: **every code we write for this app will go in this function!** That's because we only have one time we have to DO something in our app, and that's when the user hits that submit button. Then we wait for them to press it again. That's it!

#### Our First Feature

Let's start with `encode`.

* First, we need to query our input box. Check it out in the HTML--it's the one with the id ` #translator-input`.
  
* Once we've queried that element, grab its `.value` property containing the input's contents and store it in a variable.
  
* There's an `h1` in our html with the id `results`--this is where we'll put our output to our user. Query that element and save it to a variable.
  
* Now set its `.innerText` to the result of passing the input to `encode`. **Note: this function is available to you globally because it's sourced in _first_ in your html file. Check it out at the bottom of the file; we have a LOT of script tags here!**
  
* Test it out. Try typing something into the input box and hitting submit. You should see an emoji for every letter you typed in!

#### Radio Buttons

If you're not familiar with the term, "radio buttons" are mutually exclusive buttons. In this case, there's one for every feature of our app. Let's use them to let the user select which feature to use!

To determine which radio button is pressed, we need to select ALL the radio buttons
in the group, and loop through them. If a radio button is checked, its `.checked`
property will be equal to `true`. (hint: use `querySelectorAll` and a `for` loop).

Once you've determined which radio button was checked, you can determine its "value" with the `.value` property! In the case of the "Encode" radio button,
this will be `"encode"`. You can view the values of the other radio buttons in
the HTML.

With this radio button value, you should know which operation you 'translation'
function you should apply to the user's input text. If the value is `"encode"`,
run the `encode()` function (defined in `encode.js`), if the value is`"madlib"`,
run the `madlib()` function (defined in `madlib.js`), etc.

This should work for `encode`, `translate`, and `madlib`. We'll be writing some extra special functionality for `search` and `random` though.

To test that your functions are working, here are a few examples you can use:

```
┌──────────────┬───────────┬───────────────────
│ RADIO BUTTON │ INPUT     │ EXPECTED OUTPUT
├──────────────┼───────────┼───────────────────
│ encode       │ aaaa      │ 👽👽👽👽
│ madlib       │ face food │ (random face emoji) (random food emoji)
│ translate    │ alien     │ 👽

```

#### Search

The search feature is going to work a bit differently from the previous three
translation methods.

Instead of the `search()` function returning us our output ready to be displayed,
`search()` instead returns an array of objects that each contain an emoji that
matches our search criteria. Before going any further, use `console.log` to examine what this array and the objects within look like specifically.

Instead of simply setting the `.innerText` of our `<h1 id="results">` to this array
of objects. We'll instead do the following:

1. Clear the current content of our `<h1 id="results">` output (hint: use `.innerHTML`)
1. Loop through each object in the array returned by the `search()` function. For each emoji object in the array:
  1. Get the actual emoji (look at the `.symbol` attribute of each object)
  1. Create a new DOM element (lets do a `<p>` tag), and set the element's `.innerText` to be the emoji
  1. Append this new `<p>` element as a child of our `<h1 id="results">` 

Finally, if `search()` returns an empty array, display text indicating that no
emojis were found instead of doing the above steps.


For search, we'll want to print every single emoji that matches the search criteria.

Test out your search feature with something like `corn`, which should give you unicorn and popcorn emojis. Or try the letter y, which should give you 8 emojis.

#### Random

Finally, the random feature! The random feature should select a random other
translation (either encode, madlib, translate, or search) and execute that
functionality!

To do this, remember that `Math.random()` will return a number between 0 and 1. You can adapt this to create a random integer generator (as seen in the dice rolling assignment).

From here, generate a random integer with a range equivalent to the number of translations you want to select from (four). One way forward from here would be to add code such that if the random integer equals 0, pick encode; if 1, pick translate, etc.

#### Stretch Goals

* Change the event listener so that it fires when they type something. You'll want to add it as an event listener on the input box, not the button. But what event? That's up to you to figure out! If you get this one done, you can get rid of the submit button, since it's totally unneeded!
* Let's add some help text for the user to explain these five fabulous functions. But with the twist of only showing the help text when they want it, hiding it otherwise. We'll make a collapsible html element with a toggle to show or hide it.
    * You'll need a class for this that will make an element invisible, giving it the rule to make `display` be `none`. This will take it right off the DOM, so things will move up to take its place when it's no longer there, and move down to accommodate its space whenever we remove that rule.
    * Now make a `ul` somewhere near the top of our page. Inside the `ul`, make an `li` for each of our functions, explaining what it does. Give the `ul` the class we just defined, and it should disappear, moving everything else up.
    * Above that `ul`, make an `a` tag that links nowhere (you could style it differently, maybe as a `button` tag even, but an `a` tag makes it clear it's clickable). Give it an `id` of your choosing.
    * What we're going to do is make it so that when they click that `a`, the `ul` loses that class. That way, it will show the help section. If they click it again, it will gain that class again, making it disappear once more. Let's jump over to our `main.js` and make it happen!
    * Add an event listener function that happens when the `a` tag is clicked.
    * In that function, query your `ul` and save it as a variable.
    * Now check if it has your hide-the-element class from your CSS using the `className` property (you'll have to do a bit of research on this one!). If it does, take it away. If it doesn't, add it.
    * And you're done!

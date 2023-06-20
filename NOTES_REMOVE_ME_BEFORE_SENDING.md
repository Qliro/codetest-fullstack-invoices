# BEFORE SENDING
1. Copy this whole folder (`invoices-fullstack`), name it something new (e.g. `code-test-invoices`)
2. Go into the new folder
3. Delete the hidden folder `.git/`
4. Delete `client/node_modules` and `server/node_modules`
5. Delete `client/.parcel-cache`
6. Delete `client/dist`
7. Delete `FEEDBACK_ON_TEST.md`
8. Delete this file, i.e: `NOTES_REMOVE_ME_BEFORE_SENDING.md`
9. Zip the new folder
10. Send zip to candidate

# INTRO DESCRIPTION
Describe the assignment here. 

You can use google/stackoverflow/ai(chatgpt)/etc, just make sure to show when you search and think out loud.

* Goal is not the most important
* Important thing is the journey, how you think about code, etc
* min 5 min to go through code

# GOALS
1. Create new route: `/invoice` that `GET` a specific invoice by id
2. Create an invoice details page that fetches a specific invoice
3. Create new method `PUT` in your backend to set an invoice isPaid to `true`
4. Render button/s where you can "pay" a specific invoice
5. Add validation/error handling to your routes
6. Overdue (date passed and isPaid `false`). Maybe make the text red.

## If time allows
7. FRONTEND/BACKEND TASKS
8. CASE QUESTIONS

# FRONTEND
## TASKS
* Very incorrect way of fetching data
  - Should implement `await`/`async`
  - Should implement `useEffect` (can safely delete `fetching` property after that)
* Looking at the css, is there anything you would adress?
  - `!important` on css rules to override
  - Mixing `h3` and invoice `div` elements even though they are very different
  - Why mix `scss` and `css`? It's already supporting `scss` obviously, use that
  - `:hover` should be used with `&:hover` when in `scss`
* Folder structures (components, containers)
  - `invoice` html should be a `component`
* Date formatting
* Solve all duplication

# BACKEND
## TASKS
* Optimise fetching, use `Promise.all`/`Task.WhenAll`
* Should match by id, not by index!
* Fix the ugly for loop
* Write cache for InvoicesWithDates
  - App in memory is fine
* Database fake
  - Convert from list to dictionary to optimise
* File structures
  - For example introduce service in `server-node`?
* .NET: Handling of Dependency injection
* .NET: Pattern/clean architecture
* .NET: Better namespace than `server_dotnet`
* .NET: Unit of work patters, ask about service layer?
* .NET: Get items as list compared to enumarable, etc?

## CASE QUESTIONS
* `state management` in frontend
  - State tool, redux, mobx, etc
  - Reason why they would use this and that
* Restructuring handling of Invoice model
* How would you structure the web api?
  - Best practices, etc
  - Would you use a pattern, etc?
* REST vs RPC (GraphQL for example)
* If you had to handle `static content` like language strings/device data/etc, where would you put it?
  - Good option for this = React Context
* ... add more!

# Future improvements
* Prepare for unit tests
* Create solution file
* Script to automatically generate the necessary zip file that cleans up what is needed with latest changes.


# SOLUTIONS
```c#
public bool UpdateItem(int id)
  {
    var invoice = Context.Invoices.FirstOrDefault(p => p.Id == id);
    if (invoice == null)
    {
        return false;
    }

    invoice.IsPaid = true;

    // You will need to force entity state for it to save context
    // If the candidate miss the state prop, we should just help
    Context.Entry(invoice).State = EntityState.Modified;
    Context.SaveChanges();
    return true;
  }

```
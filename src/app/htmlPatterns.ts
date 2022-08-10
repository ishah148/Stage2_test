export const getForms = () => `
<div class="sort-wrapper">
<div id="sort-radio-group" class="sort-container">
    <p>Sort  by:</p>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" data-sort-type="id" id="exampleRadios1" value="option1">
        <label class="form-check-label" for="exampleRadios1">
            ID
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" data-sort-type="time" id="exampleRadios2" value="option2">
        <label class="form-check-label" for="exampleRadios2">
            Time
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" data-sort-type="wins" id="exampleRadios3" value="option3">
        <label class="form-check-label" for="exampleRadios3">
            Wins
        </label>
    </div>
</div>
<div id="order-radio-group" class="sort-container">
    <p>Order by:</p>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios2" data-sort-type="ASC" id="exampleRadios4" value="option1">
        <label class="form-check-label" for="exampleRadios4">
            ASC
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios2" data-sort-type="DESC" id="exampleRadios5" value="option2">
        <label class="form-check-label" for="exampleRadios5">
            DESC
        </label>
    </div>
</div>
</div>
`;
export const getGeneralHTML = () => `
<header class="header">
<button id="btn-garage" class="btn btn-primary">Garage</button>
<button id="btn-winners" class="btn btn-primary">Winners</button>
</header>


<div id="race-road__wrapper" class="race-road__wrapper">

<h1 class="mx-3 my-3 text-center text-primary">Race</h1>
<button id="btn-startAll" class="btn btn-primary">Start All!</button>
<button id="btn-start" class="btn btn-primary" disabled>Reset</button>
<button id="btn-add-one-car" class="btn btn-primary" >Add  new car</button>
<button id="btn-add-many-cars" class="btn btn-primary" >Add  100 cars</button>
<span id="total-count">-</span>
<div class="race-nav">
    <button id="btn-race-prev" class="winners-nav__button btn btn-primary">Prev</button>
    <h2 class="race-nav__page-number">1</h2>
    <button id="btn-race-next" class="winners-nav__button btn btn-primary">Next</button>

</div>
</div>

<div id="winner-wrapper" class="winners__wrapper hidden rounded border border-light">
<!-- <div class="winners__header">
    <h2 class="header-id">id</h2>
    <h2 class="header-time">time</h2>
    <h2 class="header-wins">wins</h2>
</div> -->

</div>

<footer class="container-lg px-3 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
<p class="col-md-4 mb-0 text-muted">&copy; 2022</p>

<a href="/"
    class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap" />
    </svg>
</a>

<ul class="nav col-md-4 justify-content-end">
    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">RS School</a></li>

</ul>
</footer>
`;

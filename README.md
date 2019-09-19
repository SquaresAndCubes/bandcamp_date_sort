# bandcamp_date_sort

Chrome Extension for Sorting Shows in a Users Collection on BandCamp by Date

As of right now BandCamp does not have an individual date field, or it appears really any support for dates as it seems it was just designed for albums and not live shows.
Therefore the way dates are represented on the site for live shows is simply a date as part of the string that represents the entire title of the show/recording in the format "yyyy.mm.dd".

Below is the basic HTML structure that you would see on a User's Collection Page (clicking the 'heart' button) of content if they had live shows with dates in them.

The "bandcamp_date_sort" extension uses JavaScript injection to sort the parent list item nodes of the `<ol class="collection-grid">` by matching the date via Regular Expression on the text field of the Child nodes of the `<div class="collection-item-title">`.

A typical use case would be to navigate to your "collection" by clicking the "heart" button on the site, then you would click the bandcamp_date_sort Chrome extension button and it would automatically click the "show all items" button on the bottom of the page for you and then automatically scroll continually to the bottom of the page until all of the items in your collection are exposed/loaded. Then the sorting algorithm runs and reorders the show objects on the page. As this project moves forward the primarily goal will be to improve upon this algorithm as it is not perfect but does do a pretty good job as of right now.

```html
<div id="collection-items" class="collection-items">
  <ol class="collection-grid editable ui-sortable">
    <li class="collection-item-container track_play_hilite subscriber-item initial-batch  active editing">
      <div class="collection-title-details">
        <a href="https://sts9.bandcamp.com/album/20190907" class="item-link">
          <div class="collection-item-title">
            2019.09.07 :: Red Rocks Amphitheatre :: Morrison, CO
          </div>
        </a>
      </div>
    </li>
    <li class="collection-item-container track_play_hilite subscriber-item initial-batch  active editing">
      <div class="collection-title-details">
        <a href="https://sts9.bandcamp.com/album/20190906" class="item-link">
          <div class="collection-item-title">
            2019.09.06 :: Red Rocks Amphitheatre :: Morrison, CO
          </div>
        </a>
      </div>
    </li>
  </ol>
</div>
```

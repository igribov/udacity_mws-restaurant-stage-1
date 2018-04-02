"use strict";var _createClass=function(){function u(e,n){for(var t=0;t<n.length;t++){var u=n[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(e,n,t){return n&&u(e.prototype,n),t&&u(e,t),e}}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var DBHelper=function(){function l(){_classCallCheck(this,l)}return _createClass(l,null,[{key:"fetchRestaurants",value:function(t){var u=new XMLHttpRequest;u.open("GET",l.DATABASE_URL),u.onload=function(){if(200===u.status){var e=JSON.parse(u.responseText).restaurants;t(null,e)}else{var n="Request failed. Returned status of "+u.status;t(n,null)}},u.send()}},{key:"fetchRestaurantById",value:function(u,r){l.fetchRestaurants(function(e,n){if(e)r(e,null);else{var t=n.find(function(e){return e.id==u});t?r(null,t):r("Restaurant does not exist",null)}})}},{key:"fetchRestaurantByCuisine",value:function(u,r){l.fetchRestaurants(function(e,n){if(e)r(e,null);else{var t=n.filter(function(e){return e.cuisine_type==u});r(null,t)}})}},{key:"fetchRestaurantByNeighborhood",value:function(u,r){l.fetchRestaurants(function(e,n){if(e)r(e,null);else{var t=n.filter(function(e){return e.neighborhood==u});r(null,t)}})}},{key:"fetchRestaurantByCuisineAndNeighborhood",value:function(u,r,a){l.fetchRestaurants(function(e,n){if(e)a(e,null);else{var t=n;"all"!=u&&(t=t.filter(function(e){return e.cuisine_type==u})),"all"!=r&&(t=t.filter(function(e){return e.neighborhood==r})),a(null,t)}})}},{key:"fetchNeighborhoods",value:function(r){l.fetchRestaurants(function(e,t){if(e)r(e,null);else{var u=t.map(function(e,n){return t[n].neighborhood}),n=u.filter(function(e,n){return u.indexOf(e)==n});r(null,n)}})}},{key:"fetchCuisines",value:function(r){l.fetchRestaurants(function(e,t){if(e)r(e,null);else{var u=t.map(function(e,n){return t[n].cuisine_type}),n=u.filter(function(e,n){return u.indexOf(e)==n});r(null,n)}})}},{key:"urlForRestaurant",value:function(e){return"./restaurant.html?id="+e.id}},{key:"imageUrlForRestaurant",value:function(e){return"/img/"+e.photograph}},{key:"mapMarkerForRestaurant",value:function(e,n){return new google.maps.Marker({position:e.latlng,title:e.name,url:l.urlForRestaurant(e),map:n,animation:google.maps.Animation.DROP})}},{key:"DATABASE_URL",get:function(){return"http://localhost:8888/data/restaurants.json"}}]),l}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiaGVscGVyLmpzIl0sIm5hbWVzIjpbIkRCSGVscGVyIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJEQVRBQkFTRV9VUkwiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXN0YXVyYW50cyIsInJlc3BvbnNlVGV4dCIsImVycm9yIiwianNvbiIsIkpTT04iLCJzZW5kIiwiaWQiLCJmZXRjaFJlc3RhdXJhbnRzIiwicmVzdGF1cmFudCIsImZpbmQiLCJyIiwiY3Vpc2luZSIsInJlc3VsdHMiLCJmaWx0ZXIiLCJjdWlzaW5lX3R5cGUiLCJuZWlnaGJvcmhvb2QiLCJ2IiwiaSIsIm5laWdoYm9yaG9vZHMiLCJpbmRleE9mIiwidW5pcXVlTmVpZ2hib3Job29kcyIsImN1aXNpbmVzIiwibWFwIiwidW5pcXVlQ3Vpc2luZXMiLCJwaG90b2dyYXBoIiwiZ29vZ2xlIiwibWFwcyIsIk1hcmtlciIsInBvc2l0aW9uIiwibGF0bG5nIiwidGl0bGUiLCJuYW1lIiwidXJsIiwidXJsRm9yUmVzdGF1cmFudCIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsIkRST1AiXSwibWFwcGluZ3MiOiJpWUFHTUEsNEhBY29CQyxHQUh4QixJQUFBQyxFQUFBLElBQUFDLGVBS0VELEVBQUlFLEtBQUssTUFBT0osRUFBU0ssY0FDekJILEVBQUlJLE9BQVMsV0FDWCxHQUFtQixNQUFmSixFQUFJSyxPQUFnQixDQUgxQixJQUNBQyxFQURjTCxLQUFBQSxNQUFBQSxFQUFkTSxjQUN5QkosWUFDekJILEVBQUEsS0FBYU0sT0FDUE4sQ0FBc0IsSUFBQVEsRUFBQUEsc0NBQUFSLEVBQUFLLE9BQ3hCTixFQUFNVSxFQUFPQyxRQUdkVixFQUFBVyxtREFLSEMsRUFBQWIsR0FRQUQsRUFBU2UsaUJBQWlCLFNBQUNMLEVBQU9GLEdBTHBDLEdBQUFFLEVBT01ULEVBQVNTLEVBQU8sVUFDWCxDQUNMLElBQU1NLEVBQWFSLEVBQVlTLEtBQUssU0FBQUMsR0FBQSxPQUFLQSxFQUFFSixJQUFNQSxJQUM3Q0UsRUFDRmYsRUFBUyxLQUFNZSxHQVByQmYsRUFBQSw0QkFBQSwwREFNc0JrQixFQUFBbEIsR0FFakJELEVBRkRlLGlCQUVPLFNBQUFMLEVBQUFGLEdBQUUsR0FBQUUsRUFDUFQsRUFBQUEsRUFBUyxVQUNWLENBVEwsSUFBQW1CLEVBQUFaLEVBQUFhLE9BQUEsU0FBQUgsR0FBQSxPQUFBQSxFQUFBSSxjQUFBSCxJQVlEbEIsRUFBQSxLQUFBbUIsNERBcUJvQ0csRUFBY3RCLEdBZGpERCxFQUFBQSxpQkFBU2UsU0FBVEwsRUFBMEJGLEdBQ3hCLEdBQUFFLEVBQ0VULEVBQUFBLEVBQUEsVUFERixDQUlFLElBQU1tQixFQUFVWixFQUFZYSxPQUFPLFNBQUFILEdBQUEsT0FBQUEsRUFBQUssY0FBQUEsSUFBQXRCLEVBQUEsS0FBT3FCLHNFQXlCREgsRUFBU0ksRUFBY3RCLEdBRXBFRCxFQUFTZSxpQkFBaUIsU0FBQ0wsRUFBT0YsR0FDaEMsR0FBSUUsRUFDRlQsRUFBU1MsRUFBTyxVQUNYLENBcEJULElBQUFVLEVBQUFaLEVBQ1NPLE9BQVRmLElBQ0VvQixFQUFXQSxFQUFBQyxPQUFBLFNBQUFILEdBQUEsT0FBQUEsRUFBQUksY0FBQUgsS0FFSixPQUZQSSxJQUdFSCxFQUFBQSxFQUFBQyxPQUFBLFNBQUFILEdBQUEsT0FBQUEsRUFBQUssY0FBQUEsS0FDbUN0QixFQUFBLEtBQU9zQixpREE4QnRCdEIsR0FFeEJELEVBQVNlLGlCQUFpQixTQUFDTCxFQUFPRixHQUNoQyxHQUFJRSxFQUNGVCxFQUFTUyxFQUFPLFVBQ1gsQ0F4QlRWLElBQUFBLEVBQVNlLEVBQWtCTCxJQUFBQSxTQUFEYyxFQUFRaEIsR0FBUEUsT0FBT0YsRUFBZ0JpQixHQUFBRixlQUU5Q3RCLEVBQUF5QixFQUFBTCxPQUFBLFNBQUFHLEVBQUFDLEdBQUEsT0FBQUMsRUFBQUMsUUFBQUgsSUFBQUMsSUFDRHhCLEVBQU0sS0FBQTJCLDRDQUtETCxHQUNGSCxFQUFBQSxpQkFBa0JDLFNBQUFBLEVBQU9iLEdBQUEsR0FBQUUsRUFBQVQsRUFBekJTLEVBQUEsVUFDRCxDQUVGLElBQUFtQixFQUFBckIsRUFBQXNCLElBQUEsU0FBQU4sRUFBQUMsR0FBQSxPQUFBakIsRUFBQWlCLEdBQUFILGVBRUpTLEVBQUFGLEVBQUFSLE9BQUEsU0FBQUcsRUFBQUMsR0FBQSxPQUFBSSxFQUFBRixRQUFBSCxJQUFBQyxJQWlDS3hCLEVBQVMsS0FBTThCLCtDQTNCbkJmLEdBQ0FoQixNQUFBQSx3QkFBMEJnQixFQUFBRixpREFLc0NXLEdBQXRCLE1BQUEsUUFBdENULEVBQUFnQiwwREFJRGhCLEVBQUFjLEdBK0NILE9BeERBLElBQUFHLE9BQUFDLEtBQUFDLE9BQUEsQ0FXREMsU0FBQXBCLEVBQUFxQixPQXdDR0MsTUFBT3RCLEVBQVd1QixLQXRDdEJDLElBQUF4QyxFQUFBeUMsaUJBQUF6QixHQXdDSWMsSUFBS0EsRUFDTFksVUFBV1QsT0FBT0MsS0FBS1MsVUFBVUMsNENBekpuQyxNQUFBIiwiZmlsZSI6ImRiaGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbW1vbiBkYXRhYmFzZSBoZWxwZXIgZnVuY3Rpb25zLlxyXG4gKi9cclxuY2xhc3MgREJIZWxwZXIge1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhYmFzZSBVUkwuXHJcbiAgICogQ2hhbmdlIHRoaXMgdG8gcmVzdGF1cmFudHMuanNvbiBmaWxlIGxvY2F0aW9uIG9uIHlvdXIgc2VydmVyLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgREFUQUJBU0VfVVJMKCkge1xyXG4gICAgY29uc3QgcG9ydCA9IDg4ODggLy8gQ2hhbmdlIHRoaXMgdG8geW91ciBzZXJ2ZXIgcG9ydFxyXG4gICAgcmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vZGF0YS9yZXN0YXVyYW50cy5qc29uYDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGFsbCByZXN0YXVyYW50cy5cclxuICAgKi9cclxuICBzdGF0aWMgZmV0Y2hSZXN0YXVyYW50cyhjYWxsYmFjaykge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIERCSGVscGVyLkRBVEFCQVNFX1VSTCk7XHJcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7IC8vIEdvdCBhIHN1Y2Nlc3MgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIhXHJcbiAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBqc29uLnJlc3RhdXJhbnRzO1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3RhdXJhbnRzKTtcclxuICAgICAgfSBlbHNlIHsgLy8gT29wcyEuIEdvdCBhbiBlcnJvciBmcm9tIHNlcnZlci5cclxuICAgICAgICBjb25zdCBlcnJvciA9IChgUmVxdWVzdCBmYWlsZWQuIFJldHVybmVkIHN0YXR1cyBvZiAke3hoci5zdGF0dXN9YCk7XHJcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGEgcmVzdGF1cmFudCBieSBpdHMgSUQuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoUmVzdGF1cmFudEJ5SWQoaWQsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyBmZXRjaCBhbGwgcmVzdGF1cmFudHMgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICBEQkhlbHBlci5mZXRjaFJlc3RhdXJhbnRzKChlcnJvciwgcmVzdGF1cmFudHMpID0+IHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSByZXN0YXVyYW50cy5maW5kKHIgPT4gci5pZCA9PSBpZCk7XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnQpIHsgLy8gR290IHRoZSByZXN0YXVyYW50XHJcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN0YXVyYW50KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBSZXN0YXVyYW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgICAgY2FsbGJhY2soJ1Jlc3RhdXJhbnQgZG9lcyBub3QgZXhpc3QnLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcmVzdGF1cmFudHMgYnkgYSBjdWlzaW5lIHR5cGUgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoUmVzdGF1cmFudEJ5Q3Vpc2luZShjdWlzaW5lLCBjYWxsYmFjaykge1xyXG4gICAgLy8gRmV0Y2ggYWxsIHJlc3RhdXJhbnRzICB3aXRoIHByb3BlciBlcnJvciBoYW5kbGluZ1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGaWx0ZXIgcmVzdGF1cmFudHMgdG8gaGF2ZSBvbmx5IGdpdmVuIGN1aXNpbmUgdHlwZVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXN0YXVyYW50cy5maWx0ZXIociA9PiByLmN1aXNpbmVfdHlwZSA9PSBjdWlzaW5lKTtcclxuICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCByZXN0YXVyYW50cyBieSBhIG5laWdoYm9yaG9vZCB3aXRoIHByb3BlciBlcnJvciBoYW5kbGluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZmV0Y2hSZXN0YXVyYW50QnlOZWlnaGJvcmhvb2QobmVpZ2hib3Job29kLCBjYWxsYmFjaykge1xyXG4gICAgLy8gRmV0Y2ggYWxsIHJlc3RhdXJhbnRzXHJcbiAgICBEQkhlbHBlci5mZXRjaFJlc3RhdXJhbnRzKChlcnJvciwgcmVzdGF1cmFudHMpID0+IHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZpbHRlciByZXN0YXVyYW50cyB0byBoYXZlIG9ubHkgZ2l2ZW4gbmVpZ2hib3Job29kXHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHJlc3RhdXJhbnRzLmZpbHRlcihyID0+IHIubmVpZ2hib3Job29kID09IG5laWdoYm9yaG9vZCk7XHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcmVzdGF1cmFudHMgYnkgYSBjdWlzaW5lIGFuZCBhIG5laWdoYm9yaG9vZCB3aXRoIHByb3BlciBlcnJvciBoYW5kbGluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZmV0Y2hSZXN0YXVyYW50QnlDdWlzaW5lQW5kTmVpZ2hib3Job29kKGN1aXNpbmUsIG5laWdoYm9yaG9vZCwgY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50c1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IHJlc3RhdXJhbnRzXHJcbiAgICAgICAgaWYgKGN1aXNpbmUgIT0gJ2FsbCcpIHsgLy8gZmlsdGVyIGJ5IGN1aXNpbmVcclxuICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcihyID0+IHIuY3Vpc2luZV90eXBlID09IGN1aXNpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmVpZ2hib3Job29kICE9ICdhbGwnKSB7IC8vIGZpbHRlciBieSBuZWlnaGJvcmhvb2RcclxuICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcihyID0+IHIubmVpZ2hib3Job29kID09IG5laWdoYm9yaG9vZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGFsbCBuZWlnaGJvcmhvb2RzIHdpdGggcHJvcGVyIGVycm9yIGhhbmRsaW5nLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaE5laWdoYm9yaG9vZHMoY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50c1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBHZXQgYWxsIG5laWdoYm9yaG9vZHMgZnJvbSBhbGwgcmVzdGF1cmFudHNcclxuICAgICAgICBjb25zdCBuZWlnaGJvcmhvb2RzID0gcmVzdGF1cmFudHMubWFwKCh2LCBpKSA9PiByZXN0YXVyYW50c1tpXS5uZWlnaGJvcmhvb2QpXHJcbiAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBuZWlnaGJvcmhvb2RzXHJcbiAgICAgICAgY29uc3QgdW5pcXVlTmVpZ2hib3Job29kcyA9IG5laWdoYm9yaG9vZHMuZmlsdGVyKCh2LCBpKSA9PiBuZWlnaGJvcmhvb2RzLmluZGV4T2YodikgPT0gaSlcclxuICAgICAgICBjYWxsYmFjayhudWxsLCB1bmlxdWVOZWlnaGJvcmhvb2RzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhbGwgY3Vpc2luZXMgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoQ3Vpc2luZXMoY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50c1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBHZXQgYWxsIGN1aXNpbmVzIGZyb20gYWxsIHJlc3RhdXJhbnRzXHJcbiAgICAgICAgY29uc3QgY3Vpc2luZXMgPSByZXN0YXVyYW50cy5tYXAoKHYsIGkpID0+IHJlc3RhdXJhbnRzW2ldLmN1aXNpbmVfdHlwZSlcclxuICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlcyBmcm9tIGN1aXNpbmVzXHJcbiAgICAgICAgY29uc3QgdW5pcXVlQ3Vpc2luZXMgPSBjdWlzaW5lcy5maWx0ZXIoKHYsIGkpID0+IGN1aXNpbmVzLmluZGV4T2YodikgPT0gaSlcclxuICAgICAgICBjYWxsYmFjayhudWxsLCB1bmlxdWVDdWlzaW5lcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzdGF1cmFudCBwYWdlIFVSTC5cclxuICAgKi9cclxuICBzdGF0aWMgdXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50KSB7XHJcbiAgICByZXR1cm4gKGAuL3Jlc3RhdXJhbnQuaHRtbD9pZD0ke3Jlc3RhdXJhbnQuaWR9YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXN0YXVyYW50IGltYWdlIFVSTC5cclxuICAgKi9cclxuICBzdGF0aWMgaW1hZ2VVcmxGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQpIHtcclxuICAgIHJldHVybiAoYC9pbWcvJHtyZXN0YXVyYW50LnBob3RvZ3JhcGh9YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXAgbWFya2VyIGZvciBhIHJlc3RhdXJhbnQuXHJcbiAgICovXHJcbiAgc3RhdGljIG1hcE1hcmtlckZvclJlc3RhdXJhbnQocmVzdGF1cmFudCwgbWFwKSB7XHJcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246IHJlc3RhdXJhbnQubGF0bG5nLFxyXG4gICAgICB0aXRsZTogcmVzdGF1cmFudC5uYW1lLFxyXG4gICAgICB1cmw6IERCSGVscGVyLnVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudCksXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBtYXJrZXI7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=

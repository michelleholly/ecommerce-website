;(function(){
	
	'use strict';

	var expandSearch = {
		init: function(){

			var _this = this,
			_searchContainers = document.querySelectorAll('.expandSearch');

			for( var _index in _searchContainers ){
				if( typeof _searchContainers[ _index ] === 'object' ){
					_this.searchFunctions( _searchContainers[ _index ] );
				}
			}

		},

		searchFunctions: function( _thisSearch ){
				
			var _nodes = _thisSearch.childNodes;

			//a click
			_nodes[3].addEventListener('click',function(e){

				if( _thisSearch.attributes.class.value.indexOf("showSearch") > -1 ){
					_thisSearch.attributes.class.value = 'expandSearch';
				}
				else{
					_thisSearch.attributes.class.value = 'expandSearch showSearch';
				}

				if( !e.preventDefault() ){ e.returnValue = false; }
			});

		}

	};


	//execute
	expandSearch.init();

}());
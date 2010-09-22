
(function (tree) {
	
	tree.functions.fl_columnswidth = function(count, width, columns) {
		if(width.unit == '%' || width.unit == 'em') {
			return new(tree.Dimension)(100 / columns.value * count.value, '%');	
		} else {
			return new(tree.Dimension)((width.value / columns.value) * count.value, width.unit);	
		}
	}
	
})(window.less.tree);
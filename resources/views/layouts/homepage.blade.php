@include('layouts.components.htmlhead')
<body>
	<div class="hover"></div>
		<div class="popup">
			<div class="close">X</div>
				<div class="popup-content">
					<p class="data-content"></p>
				</div>
		</div>
	<div id="main">
	@include('layouts.components.header')
		@yield('content')
	@include('layouts.components.footer')
	</div>
</body>
</html>
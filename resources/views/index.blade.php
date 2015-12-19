@extends('layouts.homepage')
	
    @section('content')
        <main class="content-wrapper">
        	<section class="about">
            @if( isset($about) && !empty($about))
				<h2 class="title">{{ $about[0]->title }}</h2>
    			<p><?php echo $about[0]->content ?></p>
            @else 
                <h1>Error...</h1>
            @endif
        	</section>

            <section class="services">
                <h2 class="title">Услуги</h2>
               @if( isset($services) && !empty($services))
                    @foreach($services as $value)
                        <div class="service-content">
                            <div class="service-title"><p>{{$value->title}}</p></div>
                            <img class="service-img" src="{{asset($value->imgUrl)}}" alt="{{$value->title}}">
                            <input class="data" type="hidden" value="{{$value->description}}">
                        </div>
                    @endforeach
                @else
                    <h1>Error...</h1>
                @endif
            </section>

            <section class="portfolio">
                @if ( isset($events) && !empty($events))
                    <h2 class="title">Последнее организованное нами мероприятие</h2>
                    <div class="event-description">
                        <h3 class="event-title">{{ $events[0]->event_title }}</h3>
                        <p>{{$events[0]->event_description}}</p>
                    </div>

                    @if (isset($gallery) && !empty($gallery))
                        <div class="event-gallery">
                            @foreach ($gallery as $value)
                                <div class="img-container">
                                    <img src="{{ asset($value->imgUrl) }}" alt="{{ $events[0]->event_title }}">
                                </div>
                            @endforeach
                        </div>
                    @endif
                @else 
                    <h1>Error..</h1>
                @endif
            </section>

            <section class="video">
                <h2 class="title">Видео</h2>
                @if (isset($video) && !empty($video))
                    @foreach ($video as $value)
                        <div class="video-container">
                            <?php echo $value->iframe; ?>
                        </div>
                    @endforeach
                @endif
            </section>

            <section class="partners">
                <h2 class="title">Партнеры</h2>
                <div class="partners-item">
                    <div class="partners-logo-nt filter"></div>
                    <div class="partners-logo-akademia filter"></div>
                    <div class="partners-logo-vintag filter"></div>
                    <div class="partners-logo-fregat filter"></div>
                    <div class="partners-logo-kaljan filter"></div>
                    <div class="partners-logo-showtime filter"></div>
                </div>
            </section>
        </main>
    @endsection
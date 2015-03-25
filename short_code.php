function latest_news_shortcode ($atts, $content = null) // уточнить насчет контента
    {
        $a = shortcode_atts (array (
                    'qty'  => '2', 
                    'order_by' =>  'date',
                    'order' => 'desc',
                    'thumbnails_off' => 'false',
                    'author_off' => 'false',
                    'comments_off' => 'false',
                    'excerpt_off' => 'false',
                    ), $atts);

        $the_query = new WP_Query('posts_per_page=2&order=ASC');
        $qty = 2;
		//$y = $the_query->$post_count();
		//if ($y>0 ) 
		//{
			for ($x = 0; $x < $qty; $x++) // убрать теги h2 если не нужны
			{
		        $the_query->the_post();  ?>  
		            <div class="news-item">
		                <div class="news-image">
		                    <a href="/"><?php next_image_link(); ?></a>
		                    <div class="news-date-block">
		                        <div class="news-date month"></div>
		                        <div class="news-date day"><?php the_date() ?></div>
		                    </div></div><div class="news-body"><a href="/"><h4><?php the_title(); ?></h4></a>
		                    <span class="author">by <a href="/"><?php the_author();?></a></span>
		                    <span class="comments">comments (<a href="/"><?php comments_number();?></a>)</span><p>
		                    <?php the_content(); ?></p></div></div><div><?php
			}
			wp_reset_postdata();
		//}              		//проверить нормально если кол-во меньше чем qty в параметрах
    }
  
    
add_shortcode('latest_news', 'latest_news_shortcode');

?>
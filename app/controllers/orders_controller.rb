class OrdersController < ApplicationController
    def index
        res = HTTParty.get('https://www.realhubapp.com/api/v2/orders.json?include_order_items=true&include_order_agency=true&include_order_item_status=true&include_order_campaign=true&include_order_item_artwork=true',
            headers: { 'x-api-token': ENV['API_KEY'] })
        @orders = res.body
    end
end

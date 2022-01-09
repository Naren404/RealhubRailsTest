class OrdersController < ApplicationController
    skip_before_action :verify_authenticity_token, :only => [:update_status]
    def index
        res = HTTParty.get('https://www.realhubapp.com/api/v2/orders.json?include_order_items=true&include_order_agency=true&include_order_item_status=true&include_order_campaign=true&include_order_item_artwork=true',
             headers: { 'x-api-token': ENV['API_KEY'] })
        @orders = JSON.parse(res.body)
    end
    
    def update_status
        order_items_id = params[:id]
        status = params[:status]
        res = HTTParty.put("https://www.realhubapp.com/api/v2/order_items/#{order_items_id}.json?status=#{status}",
            headers: { 'x-api-token': ENV['API_KEY']}
        )
        puts JSON.parse(res.body)
        redirect_to orders_path
    end
end

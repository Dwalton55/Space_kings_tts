class GamesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_game, only: [:show, :edit, :update, :destroy]
  before_action :all_games, only: [:index, :create, :update, :destroy]


  # GET /games/new
  def new
    @game = Game.new
  end

  # GET /games/1/edit
  def show
    @characters = Character.all
    @game_id =params[:id] 
   
  end
  # POST /games
  # POST /games.json
  def create
    @game = Game.create(game_params)
    redirect_to games_path
  end

  # PATCH/PUT /games/1
  # PATCH/PUT /games/1.json
  def update
   @game.update(game_params)
  end

  # DELETE /games/1
  # DELETE /games/1.json
  def destroy
    @game.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    def all_games
      @games = Game.all
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def game_params
      params.require(:game).permit(:name, :description, :locked, :gm_id)
    end
end

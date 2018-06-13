class CharactersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_character, only: [:show, :edit, :update, :destroy]
  before_action :all_characters, only: [:index, :update, :destroy, :create]


  # GET /characters
  # GET /characters.json
  def index
    @characters = Character.all
  end

  # GET /characters/1
  # GET /characters/1.json
  def show
    @game_id = params[:game_id]
    @characters = Character.all
    begin
    if @characters == nil
      redirect_to games_path
    else
      @character = Character.find(params[:id])
    end
  rescue ActiveRecord::RecordNotFound => e
 
  end
  end

  # GET /characters/new
  def new
    @character = Character.new
    @game_id = params[:game_id]
  end

  # GET /characters/1/edit
  def edit
    @character = Character.find(params[:id])
    @game_id = params[:game_id].to_i
  end

  # POST /characters
  # POST /characters.json
  def create
    @game_id = params[:game_id].to_i  
    @character = Character.create(character_params)
    respond_to do |format|
      if @character.save
        format.html { redirect_to @character, notice: 'Character was successfully created.' }
        format.json { render :show, status: :created, location: @character }
      else
        format.html { render :new }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /characters/1
  # PATCH/PUT /characters/1.json
  def update
    @game_id = params[:game_id].to_i 
    @character = Character.find(params[:id])
    respond_to do |format|
      if @character.update(character_params)
        format.html { redirect_to @character, notice: 'Your Character was successfully updated.' }
        format.json { render :show, status: :ok, location: @character }
      else
        format.html { render :edit }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /characters/1
  # DELETE /characters/1.json
  def destroy
    @character.destroy
    respond_to do |format|
      format.html { redirect_to characters_url, notice: 'Character was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find_by(params[:user_id])
    end

    def all_characters
      @characters = Character.all
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def character_params
      params.require(:character).permit(:name, :player, :concept, :maxHealth, :currentHealth, :brawn, :agility, :wit, :intelligence, :charm, :presense, :maxDodge, :currentDrive, :initiative, :maxDrive, :currentDrive, :game_id, :athletics, :biology, :computers, :empathy, :engineering, :explosives, :firearms, :law, :lying, :melee, :piloting, :persuasion, :perform, :sneaking, :spacewise, :survival, :telekinesis, :telepathy, :special, :user_id)
    end
end
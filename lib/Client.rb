class Client
  attr_accessor :name, :email, :phone, :message

  def initialize(attributes = {})
    @name  = attributes[:name]
    @email = attributes[:email]
    @phone = attributes[:phone]
    @message = attributes[:message]
  end
end
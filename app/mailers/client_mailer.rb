require 'Client'

class ClientMailer < ApplicationMailer
  def client_email(client)
    @client = Client.new(client)
    mail(to: 'contacto@des-ing.cl', subject: 'Mensaje desde la página web')
  end
end

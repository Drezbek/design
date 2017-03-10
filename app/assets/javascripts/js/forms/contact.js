var ContactForm = function () {

    return {

        //Contact Form
        initContactForm: function () {
            // Validation
            $("#sky-form3").validate({
                // Rules for form validation
                rules:
                    {
                        'client[name]':
                            {
                                required: true
                            },
                        'client[email]':
                            {
                                required: true,
                                email: true
                            },
                        'client[phone]':
                            {
                                required: true
                            },
                        'client[message]':
                            {
                                required: true,
                                minlength: 10
                            },
                    },

                // Messages for form validation
                messages:
                    {
                        'client[name]':
                            {
                                required: 'Porfavor ingresa tu nombre'
                            },
                        'client[email]':
                            {
                                required: 'Porfavor ingresa tu dirección de correo',
                                email: 'Porfavor ingresa una dirección de correo válida'
                            },
                        'client[phone]':
                            {
                              required: 'Porfavor ingresa tu número de contacto'
                            },
                        'client[message]':
                            {
                                required: 'Porfavor ingresa tu mensaje',
                                minlength: 'Porfavor ingresa al menos 10 caracteres'
                            },
                    },

                // Ajax form submition
                submitHandler: function(form)
                {
                    $(form).ajaxSubmit(
                        {
                            beforeSend: function()
                            {
                                var l = $( 'button[type=submit]' ).ladda();
                                l.ladda( 'start' );
                                $('#sky-form3 button[type="submit"]').attr('disabled', true);
                            },
                            success: function()
                            {

                                $("#sky-form3").addClass('submited');
                            }
                        });
                },

                // Do not change code below
                errorPlacement: function(error, element)
                {
                    error.insertAfter(element.parent());
                }
            });
        }

    };

}();

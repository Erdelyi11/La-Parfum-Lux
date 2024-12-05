<script>
        // Referenciák az űrlap mezőkhöz és a gombhoz
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const submitButton = document.getElementById('submit-button');

        // Funkció az űrlap mezők ellenőrzésére
        function validateForm() {
            // Ellenőrizzük, hogy mindkét mező ki van-e töltve
            if (emailInput.checkValidity() && phoneInput.checkValidity()) {
                submitButton.disabled = false; // Engedélyezzük a gombot
            } else {
                submitButton.disabled = true; // Letiltjuk a gombot
            }
        }

        // Események hozzáadása az input mezőkhöz
        emailInput.addEventListener('input', validateForm);
        phoneInput.addEventListener('input', validateForm);
    </script>
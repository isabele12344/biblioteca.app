<script>
    const Ano = new Date().getFullYear();
</script>

<div class="footer-fixo">
<div>
    <p> &copy; 
        {Ano}; Biblioteca. Todos os direitos reservados</p>
    <nav class="linksF">
        <ul>
            <li><a href="https://www.instagram.com/">Nosso instagram</a></li>
            <li><a href="https://www.skoob.com.br/">Nosso skoob</a></li>
            <li><a href="https://www.facebook.com/?locale=pt_BR">Nosso facebook</a></li>
        </ul>
    </nav> 
</div>
</div>
<style>
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1;
    }

    div{
        background-color: black;
        color: white;
        padding: 1rem;
        text-align: center;
    }
    .linksF {
        margin-top: 0.5rem;
    }

    .links a {
        color: #aaa;
        margin: 0 10px;
        text-decoration: none;
    }

    .links a:hover {
        text-decoration: underline;
    }
    .linksF ul {
        list-style: none;   
        padding: 0;
        margin: 0;
        display: flex;     
        justify-content: center; 
        gap: 20px; 
    }        
    .footer-fixo {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 100;
    }
</style>

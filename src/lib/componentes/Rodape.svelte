<script>
    const Ano = new Date().getFullYear();
</script>

<Footer>
    <p> &copy; 
        {Ano} Biblioteca. Todos os direitos reservados</p>
    <div class = "links">
        <a href="https://www.instagram.com/">Nosso instagram</a>
        <a href="https://www.skoob.com.br/">Nosso skoob</a>
        <a href="https://www.facebook.com/?locale=pt_BR">Nosso facebook</a>
    </div>
</Footer>

<style>
    Footer{
        background-color: black;
        color: white;
        padding: 1rem;
        text-align: center;
    }
    .links {
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
</style>

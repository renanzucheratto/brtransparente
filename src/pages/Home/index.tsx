import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Banner } from "./styles";

function BannerComponent(){
    return <Banner>
        
    </Banner>
}

function Home () {
    return <div className="container mt-3">

        <BannerComponent />

        <div className="row">
            <div className="col-4">
                <Card
                    title="TOP 10 - Econômicos"
                    description="Deputados que mais respeitam o nosso dinheiro."
                    icon={ArrowUpIcon}
                    url="/top-10-economicos"
                    labelButton="Saiba Mais"
                />
            </div>
            <div className="col-4">
                <Card
                    title="Top 10 - Gastões"
                    description="Lista top 10 dos deputados que mais gastaram."
                    icon={ArrowUpIcon}
                    url="/top-10-gastoes"
                    labelButton="Saiba Mais"
                />
            </div>
            <div className="col-4">
                <Card
                    title="PARTIDOS"
                    description="Você sabe quantos partidos existem em Brasília? Confira quais são."
                    icon={ArrowUpIcon}
                    url="/partidos"
                    labelButton="Saiba Mais"
                />
            </div>
        </div>
    </div>
}

export default Home
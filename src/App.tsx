import React, { useState } from 'react';
import { MessageCircle, Check, ShieldCheck, UserCheck, Star, MapPin, Instagram, X, ArrowRight } from 'lucide-react';

const WPP_LINK = "https://api.whatsapp.com/message/NYCGOWLTDMVWG1?autoload=1&app_absent=0&utm_source=ig";
const INSTA_LINK = "https://www.instagram.com/nanda__bronze/";

const HERO_IMG = "https://i.imgur.com/93aojWV.png";
const ABOUT_IMG = "https://i.imgur.com/oKWalKS.png";

const GALLERY_IMGS = [
  "https://i.imgur.com/uPhAnBc.png",
  "https://i.imgur.com/USIrxad.png",
  "https://i.imgur.com/naJ8PuO.png",
  "https://i.imgur.com/zKdnZxq.png",
];

const BTS_IMGS = [
  "https://i.imgur.com/1cuFrnG.png",
  "https://i.imgur.com/iF6zIsH.png",
  "https://i.imgur.com/NAlk6UQ.png",
  "https://i.imgur.com/xGHys7n.png",
];

function WhatsAppButton({ text = "Agendar primeira consulta gratuita", className = "" }: { text?: string, className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <a
        href={WPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
      >
        <MessageCircle size={24} />
        <span className="text-[15px] sm:text-base">{text}</span>
      </a>
      <div className="flex items-center gap-2 mt-3 text-stone-500 text-xs font-medium">
        <Check size={14} className="text-[#25D366]" />
        <span>Resposta rápida • Sem compromisso</span>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-stone-300">
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} strokeWidth={1.5} />
          </button>
          <img 
            src={selectedImage} 
            alt="Resultado ampliado" 
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-200/60 text-stone-600 text-xs font-semibold tracking-wider uppercase mb-6">
              <MapPin size={14} /> Brasília, DF
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-stone-900 font-bold tracking-tight leading-[1.1] mb-6">
              Muito prazer, sou a <span className="text-stone-700">Nanda.</span><br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-stone-500 mt-2 block">
                Vou realçar sua beleza natural.
              </span>
            </h1>
            
            <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
              Recupere sua autoestima e sinta-se incrível no seu próprio corpo com minhas técnicas exclusivas de camuflagem de estrias, cicatrizes e personal bronze.
            </p>
            
            <WhatsAppButton text="Agendar primeira consulta no WhatsApp" />
          </div>

          <div className="w-full md:w-[45%] relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 w-full max-w-[400px] mx-auto border-8 border-white/50">
              <img 
                src={HERO_IMG} 
                alt="Nanda - Personal Bronze e Especialista" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[460px] aspect-square bg-[#e8dccb] rounded-full blur-3xl opacity-60 -z-10"></div>
          </div>

        </div>
      </section>

      {/* 2. BLOCO QUEM SOU EU */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            
            <div className="flex-1 w-full">
              <h2 className="text-3xl font-bold text-stone-900 mb-6">Minha missão vai muito além da estética.</h2>
              <div className="prose prose-stone text-stone-600 text-lg leading-relaxed mb-8">
                <p>
                  Não quero apenas fazer um procedimento. Meu objetivo número um é devolver a sua confiança para vestir o que quiser e se olhar no espelho com orgulho e autoaceitação.
                </p>
                <p>
                  Com um atendimento humanizado e 100% voltado para a sua história, desenvolvo protocolos precisos para que o resultado fique o mais natural e harmonioso possível em você.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Especialista em Camuflagem de Estrias e Cicatrizes",
                  "Técnicas de Bronzeamento Uniforme e Seguro",
                  "Procedimentos rigorosos e foco na sua segurança"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-stone-700 font-medium">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-[45%]">
              <img 
                src={ABOUT_IMG} 
                alt="Bastidores com Nanda" 
                className="w-full h-auto rounded-2xl shadow-lg border border-stone-100"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. BLOCO "RESULTADOS REAIS" */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Resultados que transformam</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Toque nas fotos para ampliar. Estes são resultados reais de pessoas que escolheram investir em si mesmas.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {GALLERY_IMGS.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md bg-stone-200"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                   <div className="bg-white/90 text-stone-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      Ampliar
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">
              Aviso Médico: Resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </div>
      </section>

      {/* 4. BLOCO POR QUE CONFIAR EM MIM? */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-16">Por que tantas pessoas confiam no meu trabalho?</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: UserCheck, title: "Avaliação Honesta", desc: "Só indico o que realmente vai te entregar o resultado esperado. Sem falsas promessas." },
              { icon: Star, title: "Atendimento Comigo", desc: "Sou eu mesma que te atendo do início ao fim. Nada de intermediários ou assistentes." },
              { icon: ShieldCheck, title: "Materiais Premium", desc: "Trabalho exclusivamente com tintas e protocolos de altíssima qualidade e segurança." },
              { icon: Check, title: "Foco na Naturalidade", desc: "Buscamos o equilíbrio e a beleza natural. Seu corpo merece um cuidado refinado." }
            ].map((card, idx) => (
               <div key={idx} className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-shadow">
                 <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                   <card.icon size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-stone-900 mb-3">{card.title}</h3>
                 <p className="text-stone-600 leading-relaxed">{card.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="bg-stone-900 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Dúvida sobre qual é o melhor procedimento para sua pele?</h2>
          <p className="text-stone-300 text-lg mb-10 leading-relaxed">
            A primeira avaliação é o momento perfeito para conversarmos sem pressa. Vamos avaliar seu caso, alinhar expectativas e criar o melhor plano. E o mais importante: <span className="font-semibold text-white">é grátis e sem compromisso.</span>
          </p>
          <WhatsAppButton text="Agendar avaliação no WhatsApp" />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-16">Seu primeiro passo é muito simples</h2>
          
          <div className="flex flex-col md:flex-row gap-8 relative">
            {/* Linha conectora (Desktop) */}
            <div className="hidden md:block absolute top-[45px] left-10 right-10 h-[2px] bg-stone-100 z-0"></div>

            {[
              { 
                step: "01",
                icon: MessageCircle,
                title: "O Contato", 
                desc: "Você clica no botão do WhatsApp e nossa equipe responde rápido para agendar o melhor dia." 
              },
              { 
                step: "02",
                icon: UserCheck,
                title: "A Avaliação (Gratuita)", 
                desc: "Avalio seu caso de perto (ou por foto se preferir), tiro todas as dúvidas e explico o procedimento." 
              },
              { 
                step: "03",
                icon: Star,
                title: "A Decisão", 
                desc: "Você recebe seu plano personalizado, sem pressão, e decide quando quer iniciar sua transformação." 
              }
            ].map((s, idx) => (
               <div key={idx} className="flex-1 relative z-10 flex flex-col items-center text-center">
                 <div className="w-20 h-20 bg-white border border-stone-200 rounded-full shadow-sm flex items-center justify-center text-xl font-bold text-stone-400 mb-6 relative">
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs z-10 shadow-md">
                      <s.icon size={14}/>
                    </span>
                    {s.step}
                 </div>
                 <h3 className="text-xl font-bold text-stone-900 mb-3">{s.title}</h3>
                 <p className="text-stone-600">{s.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Bastidores) */}
      <section className="py-20 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 text-center mb-4">Dedicação aos detalhes</h2>
            <p className="text-stone-600 text-center mb-12 max-w-xl mx-auto">Um pouco mais do nosso dia a dia, espaço e o cuidado presente em cada atendimento que realizo.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {BTS_IMGS.map((img, idx) => (
                <div key={idx} className="group relative rounded-xl overflow-hidden cursor-pointer" onClick={() => setSelectedImage(img)}>
                   <img src={img} alt={`Bastidores ${idx + 1}`} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                   <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-8 tracking-tight">Pronta para resgatar sua autoestima?</h2>
          <p className="text-xl text-stone-600 mb-12">
            O primeiro passo não tem custo. Estou te esperando no WhatsApp para conversarmos sobre você.
          </p>
          <WhatsAppButton className="transform scale-105" text="Quero agendar minha consulta gratuita" />
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-stone-50 border-t border-stone-200 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-stone-900">Nanda.</h3>
            <p className="text-stone-500 text-sm mt-1">Personal Bronze & Camuflagem de Estrias</p>
            <div className="flex items-center justify-center md:justify-start gap-1 text-stone-500 text-sm mt-2">
              <MapPin size={14} /> Brasília - DF
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <a 
              href={INSTA_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:text-rose-600 hover:bg-stone-100 transition-colors mb-4"
              aria-label="Instagram da Nanda"
            >
              <Instagram size={20} />
            </a>
            <p className="text-xs text-stone-400">© {new Date().getFullYear()} Nanda Bronze. Todos os direitos reservados.</p>
          </div>
          
        </div>
      </footer>

    </div>
  );
}


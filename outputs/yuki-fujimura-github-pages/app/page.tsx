const projects = [
  {
    year: "2026",
    title: "Feed-forward 3D Gaussian splatting for unconstrained images",
    short: "WildSplatter",
    image: null,
    alt: "Abstract visualization of 3D Gaussian splats",
    citation:
      "Yuki Fujimura, Takahiro Kushida, Kitano Kazuya, Takuya Funatomi, and Yasuhiro Mukaigawa, WildSplatter: Feed-forward 3D Gaussian Splatting with Appearance Control from Unconstrained Images, arXiv preprint arXiv:2604.21182, 2026.",
    links: [
      ["Project", "https://github.com/yfujimura/WildSplatter"],
      ["Paper", "https://arxiv.org/abs/2604.21182"],
    ],
  },
  {
    year: "2025",
    title: "Pose-free feed-forward 3D Gaussian splatting",
    short: "UFV-Splatter",
    image: "./images/project-3.gif",
    alt: "Multi-view camera images and a reconstructed 3D camera model",
    citation:
      "Yuki Fujimura, Takahiro Kushida, Kitano Kazuya, Takuya Funatomi, and Yasuhiro Mukaigawa, UFV-Splatter: Pose-Free Feed-Forward 3D Gaussian Splatting Adapted to Unfavorable Views, arXiv preprint arXiv:2507.22342, 2025.",
    links: [
      ["Project", "https://yfujimura.github.io/UFV-Splatter_page/"],
      ["Paper", "https://arxiv.org/abs/2507.22342"],
    ],
  },
  {
    year: "2024",
    title: "Deep depth from focus/defocus with a camera model",
    short: "Deep Depth from Focal Stack",
    image: "./images/project-4.png",
    alt: "Diagram of a camera defocus model and neural depth estimation",
    citation:
      "Yuki Fujimura, Masaaki Iiyama, Takuya Funatomi, and Yasuhiro Mukaigawa: Deep Depth from Focal Stack with Defocus Model for Camera-Setting Invariance, IJCV, 2024.",
    links: [
      ["Paper", "https://link.springer.com/article/10.1007/s11263-023-01964-x"],
      ["Code", "https://github.com/yfujimura/DDFS"],
      ["arXiv", "https://arxiv.org/abs/2202.13055"],
      ["Press", "https://www.naist.jp/en/research_achievements/2024/02/010588.html"],
    ],
  },
  {
    year: "2023",
    title: "Neural implicit surface in non-line-of-sight imaging",
    short: "NLOS-NeuS",
    image: "./images/project-5.png",
    alt: "Non-line-of-sight imaging setup and reconstructed sculpture",
    citation:
      "Yuki Fujimura, Takahiro Kushida, Takuya Funatomi, and Yasuhiro Mukaigawa: NLOS-NeuS: Non-line-of-sight Neural Implicit Surface, ICCV, 2023.",
    links: [
      ["Project", "https://yfujimura.github.io/nlos-neus/"],
      ["Paper", "https://openaccess.thecvf.com/content/ICCV2023/papers/Fujimura_NLOS-NeuS_Non-line-of-sight_Neural_Implicit_Surface_ICCV_2023_paper.pdf"],
      ["arXiv", "https://arxiv.org/abs/2303.12280"],
    ],
  },
  {
    year: "2020",
    title: "Deep multi-view stereo in foggy scenes",
    short: "Dehazing Cost Volume",
    image: "./images/project-6.png",
    alt: "Diagram of dehazing cost volume for multi-view stereo",
    citation:
      "Yuki Fujimura, Motoharu Sonogashira, and Masaaki Iiyama, Dehazing Cost Volume for Deep Multi-view Stereo in Scattering Media, ACCV (Oral), 2020.",
    links: [
      ["Paper", "https://openaccess.thecvf.com/content/ACCV2020/papers/Fujimura_Dehazing_Cost_Volume_for_Deep_Multi-view_Stereo_in_Scattering_Media_ACCV_2020_paper.pdf"],
      ["Code", "https://github.com/yfujimura/DCV-release"],
    ],
  },
  {
    year: "2018–2020",
    title: "Photometric stereo in participating media",
    short: "Shape-dependent Forward Scatter",
    image: "./images/project-7.png",
    alt: "Photometric stereo input images, normal maps, and recovered shapes",
    citation:
      "Yuki Fujimura, Masaaki Iiyama, Atsushi Hashimoto, and Michihiko Minoh, Photometric Stereo in Participating Media Considering Shape-Dependent Forward Scatter, CVPR (Oral), 2018. Photometric Stereo in Participating Media Using an Analytical Solution for Shape-Dependent Forward Scatter, TPAMI, 2020.",
    links: [
      ["CVPR", "https://openaccess.thecvf.com/content_cvpr_2018/papers/Fujimura_Photometric_Stereo_in_CVPR_2018_paper.pdf"],
      ["TPAMI", "https://ieeexplore.ieee.org/document/8585078"],
    ],
  },
] as const;

const awards = [
  ["2026.08", "MIRUオーディエンス賞", "拡散モデルと極小領域再割当によるアニメ彩色"],
  ["2024.03", "CVIM研究会奨励賞", "学習ベース両眼ステレオが持つ事前知識のNeRFへの導入"],
  ["2023.08", "MIRUインタラクティブ発表賞", "イベントカメラを用いた人物姿勢推定結果の更新によるレイテンシ補償と精度向上"],
  ["2022.03", "山下記念研究賞", "未知散乱条件下での深層学習によるMulti-view Stereo"],
  ["2021.05", "CVIM研究会奨励賞", "3D Reconstruction in Scattering Media"],
  ["2020.08", "MIRU学生奨励賞", "Dehazing Cost Volume for Deep Multi-view Stereo in Scattering Media"],
  ["2019.08", "MIRU学生奨励賞", "Defogging Kinect: Simultaneous Estimation of Object Region and Depth in Foggy Scenes"],
  ["2019.02", "京都大学第13回ICTイノベーション優秀研究賞", "Defogging Kinect: 散乱媒体下での物体領域と奥行きの同時推定"],
] as const;

const grants = [
  ["2026–2030", "科研費 基盤B", "柔軟に動作する3次元形状復元の基盤技術開発"],
  ["2026–2029", "科研費 挑戦的研究（萌芽）", "生成AIによる光伝播データの解釈と新しいセンシング"],
  ["2022–2025", "科研費 若手研究", "カメラ撮像モデルと深層学習の融合ーボケ画像からの距離推定手法における検証"],
  ["2021–2023", "科研費 研究活動スタート支援", "深層学習と物理モデルの融合によるシンプルな観測系での不均一散乱媒体の濃度分布推定"],
  ["2019–2021", "学振 DC2", "散乱媒体下における三次元形状計測手法"],
] as const;

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Yuki Fujimura, home">
          <span>YF</span>
          Yuki Fujimura
        </a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#awards">Awards</a>
          <a href="#grants">Grants</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">COMPUTER VISION · COMPUTATIONAL IMAGING</p>
          <h1>Yuki<br />Fujimura</h1>
          <p className="role">Associate Professor</p>
          <p className="affiliation">
            <ExternalLink href="https://omilab.naist.jp/index.html">Optical Media Interface Laboratory</ExternalLink><br />
            Nara Institute of Science and Technology (NAIST)
          </p>
          <p className="intro">
            I build vision systems that connect physical image formation with machine learning—
            from 3D reconstruction to computational imaging in challenging environments.
          </p>
          <div className="contact-row">
            <a className="social-link" href="https://github.com/yfujimura" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <img src="./icons/github.svg" alt="" />
            </a>
            <a className="social-link scholar" href="https://scholar.google.com/citations?user=QuQVZXYAAAAJ&hl=ja" target="_blank" rel="noreferrer" aria-label="Google Scholar profile">
              <img src="./icons/google-scholar.svg" alt="" />
            </a>
            <span className="email">fujimura.yuki <i>[at]</i> is.naist.jp</span>
          </div>
        </div>
        <figure className="portrait-wrap">
          <div className="portrait-frame">
            <img src="./images/portrait.png" alt="Portrait of Yuki Fujimura" />
          </div>
          <figcaption>
            <span>Ph.D. in Informatics</span>
            Kyoto University, 2021
          </figcaption>
        </figure>
      </section>

      <section className="research section-shell" id="research">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Research Projects</h2>
          </div>
          <p>Physics-based vision, 3D reconstruction, and machine learning.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${index === 0 ? "featured" : ""}`} key={project.short}>
              <div className={`project-media ${project.image ? "" : "generated-art"}`}>
                {project.image ? <img src={project.image} alt={project.alt} /> : (
                  <div className="splat-field" aria-label={project.alt}>
                    <span>3D</span><b>GAUSSIAN</b><em>SPLATTING</em>
                  </div>
                )}
                <span className="year-tag">{project.year}</span>
              </div>
              <div className="project-body">
                <p className="project-kicker">{project.short}</p>
                <h3>{project.title}</h3>
                <p className="citation">{project.citation}</p>
                <div className="project-links">
                  {project.links.map(([label, href]) => <ExternalLink href={href} key={label}>{label}</ExternalLink>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="records section-shell" id="awards">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">RECOGNITION</p>
            <h2>Awards</h2>
          </div>
        </div>
        <div className="record-list">
          {awards.map(([date, award, work]) => (
            <article className="record" key={`${date}-${award}`}>
              <time>{date}</time>
              <div><h3>{award}</h3><p>{work}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="records section-shell grants" id="grants">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">RESEARCH SUPPORT</p>
            <h2>Grants</h2>
          </div>
        </div>
        <div className="grant-grid">
          {grants.map(([date, grant, topic]) => (
            <article className="grant-card" key={`${date}-${grant}`}>
              <time>{date}</time><h3>{grant}</h3><p>{topic}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div><strong>Yuki Fujimura</strong><span>Computer Vision Researcher</span></div>
        <div className="footer-links">
          <ExternalLink href="https://github.com/yfujimura">GitHub</ExternalLink>
          <ExternalLink href="https://scholar.google.com/citations?user=QuQVZXYAAAAJ&hl=ja">Google Scholar</ExternalLink>
        </div>
        <p>© {new Date().getFullYear()} Yuki Fujimura</p>
      </footer>
    </main>
  );
}

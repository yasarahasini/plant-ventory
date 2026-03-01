import Image from "next/image";

interface PlantInfo {
  id: number;
  nameEn: string;
  nameSi: string;
  category: string;
  descriptionEn: string;
  descriptionSi: string;
  image: string;
}

const plantData: PlantInfo[] = [
  {
    id: 1,
    nameEn: "Snake Plant",
    nameSi: "නාග දළ පැළෑටි",
    category: "Indoor",
    descriptionEn:
      "Snake plant is a hardy indoor plant that requires very little water and care.",
    descriptionSi:
      "නාග දළ පැළෑටි යනු ඉතා අඩු ජලය සහ සැලකිල්ලක් අවශ්‍ය වන ශක්තිමත් ගෘහස්ථ පැළෑටියකි.",
    image: "/Snake.jpg",
  },
  {
    id: 2,
    nameEn: "Aloe Vera",
    nameSi: "කොමාරිකා",
    category: "Medicinal",
    descriptionEn:
      "Aloe Vera is a medicinal plant widely used for skin care and healing.",
    descriptionSi:
      "කොමාරිකා යනු සම සුරැකුම සහ සුව කිරීම සඳහා භාවිතා වන ඖෂධීය පැළෑටියකි.",
    image: "/Aloe Vera.jpg",
  },
  {
    id: 3,
    nameEn: "Peace Lily",
    nameSi: "පීස් ලිලි",
    category: "Flowering",
    descriptionEn:
      "Peace Lily is a beautiful flowering plant that helps purify indoor air.",
    descriptionSi:
      "පීස් ලිලි යනු ගෘහස්ථ වාතය පිරිසිදු කිරීමට උපකාරී වන සුන්දර මල් පැළෑටියකි.",
    image: "/Peace Lily.jpg",
  },
];

export default function PlantDetails({
  params,
}: {
  params: { id: string };
}) {
  const plant = plantData.find((p) => p.id === Number(params.id));

  if (!plant) {
    return <div className="p-10 text-center">Plant not found 🌱</div>;
  }

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-80">
          <Image
            src={plant.image}
            alt={plant.nameEn}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 space-y-4">
          <span className="text-sm font-bold text-green-600 uppercase">
            {plant.category}
          </span>

          <h1 className="text-4xl font-black text-green-900">
            {plant.nameEn}
          </h1>

          <h2 className="text-2xl font-semibold text-green-700">
            {plant.nameSi}
          </h2>

          <p className="text-gray-700">
            🇬🇧 {plant.descriptionEn}
          </p>

          <p className="text-gray-700">
            🇱🇰 {plant.descriptionSi}
          </p>
        </div>
      </div>
    </div>
  );
}
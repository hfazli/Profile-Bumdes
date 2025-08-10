import Image from "next/image"
import Link from "next/link"

export default function ProductCard({ id, slug, name, category, price, image, phone, seller, description }) {

    return (
        <>
            <style jsx>
                {`
                h6 {
                    font-weight: 500;
                }
                h5 {
                    font-weight: 600;
                }
                .shadow-custom {
                    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
                }
            `}
            </style>

            <div className="card bg-card-primary card-img-hover-zoom h-100 border-0 shadow-custom rounded-3">
                <Image alt={name} src={image} width={270} height={200} quality={90} className="img-fluid rounded-top" style={{objectFit: 'cover', objectPosition: 'center'}} />
                <div className="card-body">
                    <h6 className="text-color-secondary">{name}</h6>
                    <h5 className="text-color-primary my-2">Rp. {price}</h5>
                    <p className="mb-0 text-14 text-color-muted small">{description}</p>
                </div>
            </div>
        </>
    );
}
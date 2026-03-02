export function PartnerLogos() {
    return (
        <div className="mt-16 flex flex-col items-center justify-center gap-12 sm:gap-16 opacity-90 w-full">
            {/* Row 1: ESCAP & KMITL */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
                <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/AW_ESCAP_LOGO_OFFICIAL.png`}
                    alt="UNESCAP"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all hover:scale-105"
                />
                <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/kmitl.png`}
                    alt="KMITL School of Engineering"
                    className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-all hover:scale-105"
                />
            </div>

            {/* Row 2: Organization and University */}
            <div className="flex flex-col items-center gap-6">
                <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center">
                    Organization and University
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
                    <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cmkl.png`}
                        alt="CMKL University"
                        className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-all hover:scale-105"
                    />
                </div>
            </div>

            {/* Row 3: Private Sectors */}
            <div className="flex flex-col items-center gap-6">
                <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center">
                    Private Sectors
                </h3>
                <div className="flex flex-wrap items-center justify-center min-h-[60px] md:min-h-[80px]">
                    {/* Empty for now as requested */}
                </div>
            </div>
        </div>
    )
}

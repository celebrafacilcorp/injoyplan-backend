-- CreateIndex
CREATE INDEX "events_isActive_idx" ON "events"("isActive");

-- CreateIndex
CREATE INDEX "events_isFeatured_idx" ON "events"("isFeatured");

-- CreateIndex
CREATE INDEX "events_category_idx" ON "events"("category");

-- CreateIndex
CREATE INDEX "events_isActive_isFeatured_idx" ON "events"("isActive", "isFeatured");

-- CreateIndex
CREATE INDEX "event_dates_eventId_idx" ON "event_dates"("eventId");

-- CreateIndex
CREATE INDEX "event_dates_date_idx" ON "event_dates"("date");

-- CreateIndex
CREATE INDEX "event_dates_price_idx" ON "event_dates"("price");

-- CreateIndex
CREATE INDEX "event_dates_startTime_idx" ON "event_dates"("startTime");

-- CreateIndex
CREATE INDEX "locations_department_idx" ON "locations"("department");

-- CreateIndex
CREATE INDEX "locations_province_idx" ON "locations"("province");

-- CreateIndex
CREATE INDEX "locations_district_idx" ON "locations"("district");

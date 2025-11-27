# Changelog

## [0.2.15] - 2025-11-27

### Fixed

- **Webhook Trigger**: Webhook-Endpoint gibt jetzt korrekte JSON-Antwort zurück
  - Webhook-Payloads werden jetzt korrekt an den Workflow weitergegeben

## [0.2.3] - 2025-11-20

### Added

- **Subscription Operations**: Neue Methoden für die Verwaltung von Abonnements hinzugefügt:
  - **Cancel**: Abonnement kündigen - stoppt die Abrechnung und macht das Abonnement nach dem Kündigungsdatum inaktiv
  - **Extend Trial**: Verlängert die Testphase eines Abonnements
  - **Find**: Abonnement anhand der ID suchen
  - **Get Many**: Mehrere Abonnements mit Filterung und Paginierung abrufen
  - **Pause**: Abonnement pausieren - stoppt die Abrechnung und macht das Abonnement inaktiv
  - **Resume**: Abonnement fortsetzen - startet die Abrechnung wieder
  - **Revoke Trial**: Testphase eines Abonnements widerrufen und sofort mit der Abrechnung beginnen
  - **Update Invoice Address**: Rechnungsadresse eines Abonnements aktualisieren
  - **Update Payment Method**: Zahlungsmethode eines Abonnements aktualisieren


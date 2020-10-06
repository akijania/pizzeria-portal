# Dashboard
`/`
- statystyki dzisiejszych zamówień (zdalne i lokalne)
- listę rezrwacji i eventów zaplanowanych na dzisiaj

# Logowanie

`/login`
- pola na login i hasło
- guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

`tables`
- wybór daty i godziny
- tabela z listą rezerwacji oraz wydarzeń
    - kazda kolumna = 1 stolik
    - kazdy wiersz = 30 minut
    - ma przypominać widok tygodna w kalendarzu Google, gdzie w kolumnach zamiast dni są róne stoliki
    - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów
`/tables/booking/:id`
- zawiera wszystkie informacje dotyczące rezerwacji
- umozliwia edycję i zapisanie zmian
`/tables/booking/now`
- umozliwia edycję i zapisanie zmian
`/tables/event/:id`
- zawiera wszystkie informacje dotyczące eventu
- umozliwia edycję i zapisanie zmian
`/tables/event/now`
- umozliwia edycję i zapisanie zmian

# Widok kelnera

`/waiter`
- tabela
    - wierszach stoliki
    - w kolumnach róne rodzaje informacji(status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
`/waiter/order/now`
- numer stolika (edytowalny)
- menu produktów
- opcje wybranego produktu
-zamówienie (zamówione produkty z opcjami i ceną)
- kwotę zamówiena
`/waiter/order/id`
- numer stolika (edytowalny)
- menu produktów
- opcje wybranego produktu
-zamówienie (zamówione produkty z opcjami i ceną)
- kwotę zamówiena

# Widok kuchni

`/kitchen`
- wyświetla listę zamówień w kolejności ich złoenia
- lista musi zawierać nr stolika (lub zamówienia zdalnego) oraz pełne informacje dot. zamówionych dań
- na liście musi być moliwość oznaczenia zamówienia jako zrealizowane





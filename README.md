**Wymagana dokumentacja
dla projektów realizowanych w ramach zajęć
Inżynierii oprogramowania
w semestrze letnim roku akademickiego 2020/20201**

1. Charakterystyka oprogramowania
    1. Nazwa skrócona.
        YourDay
    2. Nazwa pełna.
        YourDay, personal manager.
    3. Krótki opis ze wskazaniem celów.
        Aplikacja webowa, która jest narzędziem usprawniającym i poprawiającym produktywność w przedsiębiorstwie, kładące duży nacisk na prywatność danych użytkowników.
2. Prawa autorskie
    1. Autorzy:
        - Przemysław Stachurski
        - Mateusz Sobczyk
        - Filip Szczepański
    2. Warunki licencyjne do oprogramowania wytworzonego przez grupę:
        Oprogramowanie będzie open-source'owe, udostępnione na licencji MIT.
3. Specyfikacja wymagań
### Wymagania funkcjonalne



|| Nazwa krótka | Opis | P |
| --- | --- | --- | --- |
| 1 | Generowanie kodu rejestracji | Umożliwienie adminowi utworzenia kodu za pomocą którego użytkownik będzie mógł się zarejestrować. | 1 |
| 2 | Rejestracja | Umożliwienie użytkownikowi utworzenia konta za pomocą email oraz hasła. | 1 |
| 3 | Logowanie | Umożliwienie użytkownikowi zalogowania się do istniejącego już konta za pomocą email oraz hasła. | 1 |
| 4 | Wylogowanie | Umożliwienie użytkownikowi wylogowania się ze swojego konta | 2 |
| 5 | Lista zadań | Dodawanie, usuwanie oraz modyfikacja zadań użytkownika (CRUD). Zadania zawierają treść, datę oraz tworzącego. | 1 |
| 6 | Lista notatek | Dodawanie, usuwanie oraz modyfikacja notatek użytkownika (CRUD). Notatki zawierają tytuł, treść i tworzącego. | 2 |
| 7 | Lista wiadomości | Pobieranie najnowszych wiadomości za pomocą API zewnętrznego oraz wyświetlanie ich w aplikacjiWiadomość zawiera treść oraz date. | 3 |
| 8 | Prognoza pogody | Pobieranie danych pogodowych dla wybranego miasta za pomocą API zewnętrznego oraz wyświetlanie ich w aplikacji | 2 |
| 9 | Wyświetlenie daty oraz godziny | Pobieranie daty oraz godziny dla wybranego miasta i wyświetlenie ich w aplikacji. | 3 |
| 10 | Wyświetlenie cytatu na dany dzień | Pobieranie cytatu na dany dzień za pomocą API zewnętrznego oraz wyświetlenie go w aplikacji | 3 |

### Wymagania niefunkcjonalne.

|| Nazwa krótka | Opis | P |
| --- | --- | --- | --- |
| 1 | Łączność z bazą danych| Zapis danych użytkowników do internetowej bazy Mongo.db | 1 |
| 2 |~~Szyfrowanie danych przychodzących~~|~~Hashowanie danych przychodzących z formularzy rejestracji i logowania.~~ | 3 |
| 3 |~~Szyfrowanie danych wychodzących.~~|~~Bezpieczne połączenie między serwerem a klientem.~~ | 3 |
| 4 | Weryfikacja kodów dostępu przy rejestracji.| Wykorzystujemy system generowania kodów dostępu, w celu weryfikacji użytkownika, który chce się zarejestrować, aby zapobiec masowemu zakładaniu kont przez boty. | 2 |
| 5 | Weryfikacja kont użytkowników za pomocą generowania kodów dostępu.| Wykorzystujemy system generowania kodów dostępu, kody dostępu generują się przy logowaniu i pozwalają na dostęp do pozostałych funkcjonalności związanych z bazą danych. | 2 |
| 6 | Potwierdzenie rejestracji drogą mailową | W momencie założenia konta użytkownik otrzymuje wiadomość drogą mailowa która potwierdza skuteczność procesu zakładania konta | 3 |
| 7 | Zapisywanie danych z API na serwerze | W celu ograniczenia wysyłanych zapytań do zewnętrznych API serwer jako jedyny będzie wysyłał zapytania, następnie gromadził je w bazie danych i dopiero rozprowadzał do użytkowników | 2 |


1. Projekt (język UML) - odpowiedzialność: programista
   ![diagram](https://user-images.githubusercontent.com/61236736/119490413-19f49680-bd5d-11eb-8b02-0008f1b9dc58.png)

  1. Diagram przypadków użycia!
  [image](https://user-images.githubusercontent.com/61236706/121027898-9ea4d300-c7a7-11eb-9ca0-90ba27c5b182.png)
  2. Diagram czynności dla każdego przypadku użycia
  3. Diagram komponentów
  4. Diagram wdrożenia
2. Architektura systemu/oprogramowania - odpowiedzialność: programista
  1. Architektura rozwoju - stos technologiczny:
        - Back End: Node.js, MongoDB
        - Front End: Vue.js
        - Api: pogoda - "Openweathermap", cytaty - "Goquotes herokuapp", artykuły - "News Api". 

  2. Architektura uruchomieniowa - stos technologiczny.
3. Testy - odpowiedzialność: kontrola jakości.
  1. Scenariusze testów.
### Scenariusz testów

| Id | Nazwa | Opis | Typ | Czynności przygotowawcze | Czynności końcowe |
| --- | --- | --- | --- | --- | --- |
| 1 | Pobieranie danych pogodowych | Sprawdzanie poprawności pobierania i wyświetlania danych pogodowych | Testy funkcjonalne | 1. Sprawdzić czy posiadamy aktualną wersję aplikacji <br /> 2. Sprawdzić czy zwracany obiekt nie jest = NULL <br /> 3.Pobrać i wyświetlić dane pogodowe | brak |
| 2 | Pobieranie danych (wiadomości) | Sprawdzanie poprawności pobierania i wyświetlania danych informacyjnyuch | Testy funkcjonalne | 1. Sprawdzić czy posiadamy aktualną wersję aplikacji <br /> 2. Sprawdzić czy zwracany obiekt nie jest = NULL <br /> 3. Pobrać i wyświetlić dane informacyjne | brak |
| 3 | CRUD dla TODOs | Sprawdzanie poprawności pobierania, edycji, usuwania i wyświetlania danych z kontrolera TODO | Testy funkcjonalne | 1. Sprawdzić czy posiadamy aktualną wersję aplikacji <br /> 2. Sprawdzić czy zwracany obiekt nie jest = NULL <br /> 3.Pobrać i wyświetlić dane  <br /> 4.Dodać nowy Todo <br /> 5. Edytować dodany Todo <br /> 6. Usunąć dodany Todo | Upewnić się, czy obiekt został usunięty z bazy danych. |
| 4 | Pobieranie cytatów | Sprawdzanie poprawności pobierania i wyświetlania cytatów | Testy funkcjonalne | 1. Sprawdzić czy posiadamy aktualną wersję aplikacji <br /> 2. Sprawdzić czy zwracany obiekt nie jest = NULL <br /> 3.Pobrać i wyświetlić cytaty 3. | brak |
| 5 | CRUD dla WALL | Sprawdzanie poprawności pobierania, edycji, usuwania i wyświetlania danych z kontrolera WALL | Testy funkcjonalne | 1. Sprawdzić czy posiadamy aktualną wersję aplikacji <br /> 2. Sprawdzić czy zwracany obiekt nie jest = NULL <br /> 3.Pobrać i wyświetlić dane  <br /> 4.Dodać nowy obiekt typu WALL <br /> 5. Edytować dodany obiekt WALL <br /> 6. Usunąć dodany obiekt WALL | Upewnić się, czy obiekt został usunięty z bazy danych. |

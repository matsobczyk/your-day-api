**Wymagana dokumentacja
dla projektów realizowanych w ramach zajęć
Inżynierii oprogramowania
w semestrze letnim roku akademickiego 2020/20201**

# Wymagane dokumenty

1. Charakterystyka oprogramowania
  1. Nazwa skrócona.
  YourDay
  2. Nazwa pełna.
  YourDay, personal manager.
  3. Krótki opis ze wskazaniem celów.
  Aplikacja webowa, która jest narzędziem usprawniającym i poprawiającym produktywność w przedsiębiorstwie, kładące duży nacisk na prywatność danych użytkowników.
2. Prawa autorskie - odpowiedzialność: wizjoner.
  1. Autorzy:
  - Przemysław Stachurski, 
  - Mateusz Sobczyk, 
  - Filip Szczepański

1. Warunki licencyjne do oprogramowania wytworzonego przez grupę:
1. Specyfikacja wymagań
  1. Wymagania funkcjonalne
    1. Identyfikator
    2. Nazwa krótka
    3. Opis
    4. Priorytet [1-wymagana, 2 - oczekiwana, 3 - dodatkowa]


|| Nazwa krótka | Opis | P |
| --- | --- | --- | --- |
| 1 | Rejestracja | Umożliwienie użytkownikowi utworzenia konta za pomocą loginu oraz hasła. | 1 |
| 2 | Logowanie | Umożliwienie użytkownikowi zalogowania się do istniejącego już konta za pomocą loginu oraz hasła. | 1 |
| 3 | Wylogowanie | Umożliwienie użytkownikowi wylogowania się ze swojego konta | 2 |
| 4 | Lista zadań | Dodawanie, usuwanie oraz modyfikacja zadań użytkownika (CRUD)Zadania zawierają treść, datę oraz tworzącego. | 1 |
| 5 | Lista notatek | Dodawanie, usuwanie oraz modyfikacja notatek użytkownika (CRUD)Notatki zawierają tytuł, treść i tworzącego. | 2 |
| 6 | Lista wiadomości | Pobieranie najnowszych wiadomości za pomocą API zewnętrznego oraz wyświetlanie ich w aplikacjiWiadomość zawiera treść oraz date. | 2 |
| 7 | Prognoza pogody | Pobieranie danych pogodowych dla wybranego miasta za pomocą API zewnętrznego oraz wyświetlanie ich w aplikacji | 3 |
| 8 | Wyświetlenie kalendarza oraz godziny | Pobieranie daty oraz godziny dla wybranego miasta i wyświetlenie ich w aplikacji. | 3 |
| 9 | Wyświetlenie cytatu na dany dzień | Pobieranie cytatu na dany dzień za pomocą API zewnętrznego oraz wyświetlenie go w aplikacji | 3 |

  1. Wymagania niefunkcjonalne.

|| Nazwa krótka | Opis | P |
| --- | --- | --- | --- |
| 1 | Łączność z bazą danych| Zapis danych użytkowników do internetowej bazy Mongo.db | 1 |
| 2 | Szyfrowanie danych przychodzących| Hashowanie danych przychodzących z formularzy rejestracji i logowania. | 2 |
| 3 | Szyfrowanie danych wychodzących. | Bezpieczne połączenie między serwerem a klientem. | 2 |
| 4 | Weryfikacja kont użytkowników za pomocą generowania kodów dostępu.| Wykorzystujemy system generowania kodów dostępu, w celu weryfikacji użytkownika, który chce się zarejestrować, aby zapobiec masowemu zakładaniu kont przez boty. | 1 |
| 5 | Potwierdzenie rejestracji drogą mailową | W momencie założenia konta użytkownik otrzymuje wiadomość drogą mailowa która potwierdza skuteczność procesu zakładania konta | 3 |
| 6 | Zapisywanie danych z API na serwerze | W celu ograniczenia wysyłanych zapytań do zewnętrznych API serwer jako jedyny będzie wysyłał zapytania, następnie gromadził je w bazie danych i dopiero rozprowadzał do użytkowników | 2 |


1. Projekt (język UML) - odpowiedzialność: programista
  1. Diagram przypadków użycia
  2. Diagram czynności dla każdego przypadku użycia
  3. Diagram komponentów
  4. Diagram wdrożenia
2. Architektura systemu/oprogramowania - odpowiedzialność: programista
  1. Architektura rozwoju - stos technologiczny.
  2. Architektura uruchomieniowa - stos technologiczny.
3. Testy - odpowiedzialność: kontrola jakości.
  1. Scenariusze testów.
  2. Sprawozdanie z wykonania scenariuszy testów.
